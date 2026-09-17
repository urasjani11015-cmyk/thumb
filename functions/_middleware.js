export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';
  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);
  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<img src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/26459293/505288_883320.png" alt="thumb>
  }
}
