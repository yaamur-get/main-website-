const WEB3FORMS_ACCESS_KEY = "285f9485-28ae-4ca8-acac-220e8cc0054a";
export async function submitForm(
  formData: FormData,
  subject: string,
  messageField: string
): Promise<void> {
  if (WEB3FORMS_ACCESS_KEY === "285f9485-28ae-4ca8-acac-220e8cc0054a") {
    throw new Error("أضف مفتاح Web3Forms في ملف src/lib/submitForm.ts أولًا.");
  }

  if (String(formData.get("_honey") ?? "").trim()) {
    throw new Error("تعذّر إرسال الطلب.");
  }

  const fields: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (!key.startsWith("_") && typeof value === "string") {
      fields[key] = value.trim();
    }
  });

  const message = fields[messageField] || fields.message;
  if (!message) {
    throw new Error("يجب تعبئة تفاصيل الطلب قبل الإرسال.");
  }

  const payload = {
    ...fields,
    name: fields.name || fields["الاسم الكامل"] || "مقدم طلب",
    email: fields.email || "",
    message,
    subject,
    from_name: "موقع جمعية يعمر",
    access_key: WEB3FORMS_ACCESS_KEY,
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
    throw new Error("تعذّر الاتصال بخدمة الإرسال. حاول مرة أخرى.");
  }

  const result: { success?: boolean; message?: string } = await response.json();
  if (!response.ok || result.success !== true) {
    throw new Error(result.message || "تعذّر إرسال الطلب، حاول مرة أخرى.");
  }
}
