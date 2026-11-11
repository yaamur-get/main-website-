
const WEB3FORMS_ACCESS_KEY: string =
  "285f9485-28ae-4ca8-acac-220e8cc0054a";

export async function submitForm(
  formData: FormData,
  subject: string,
  messageField: string
): Promise<void> {
  const accessKey = WEB3FORMS_ACCESS_KEY.trim();

  if (!accessKey) {
    throw new Error("مفتاح Web3Forms غير موجود.");
  }

  if (String(formData.get("_honey") ?? "").trim()) {
    throw new Error("تعذر إرسال الطلب.");
  }

  const fields: Record<string, string> = {};

  formData.forEach((value, key) => {
    if (!key.startsWith("_") && typeof value === "string") {
      fields[key] = value.trim();
    }
  });

  const message = fields[messageField] || fields.message;

  if (!message?.trim()) {
    throw new Error("يرجى تعبئة تفاصيل الطلب.");
  }

  const payload = {
    ...fields,
    name: fields.name || fields["الاسم الكامل"] || "مقدم طلب",
    email: fields.email || undefined,
    message,
    subject,
    from_name: "جمعية يعمر للعناية بالمساجد",
    access_key: accessKey,
  };

  let response: Response;

  try {
    response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "تعذر الاتصال بخدمة Web3Forms. تحقق من اتصال الإنترنت."
    );
  }

  let result: {
    success?: boolean;
    message?: string;
  };

  try {
    result = await response.json();
  } catch {
    throw new Error(
      `استجابة غير متوقعة من Web3Forms. رمز الخطأ: ${response.status}`
    );
  }

  if (!response.ok || result.success !== true) {
    throw new Error(
      result.message ||
      `تعذر إرسال الطلب. رمز الخطأ: ${response.status}`
    );
  }
}
