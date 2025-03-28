"use server";

export default async function sendWhatsappCode(phoneNumber) {
  try {
    console.log(phoneNumber)
    const response = await fetch(
        "https://api.callmebot.com/whatsapp.php?phone=233257031132&text=This+is+a+test&apikey=4786408"
    );

    if (!response.ok) {
      throw newError(`HTTP error! status: ${response.status}`);
        return({success: false});
    }
    const responseData = await response.text();
    console.log(responseData);
    return({success: true})
  } catch (error) {
    console.error("Error sending WhatsApp code:", error);
  }
}
