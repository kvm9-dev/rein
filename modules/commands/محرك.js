if (!global.engineIntervals) global.engineIntervals = new Map();

module.exports.config = {
  name: "محرك",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Replit Agent",
  description: "يرسل رسالة كل 30 ثانية (تفعيل/ايقاف)",
  commandCategory: "نظام",
  prefix: true,
  usages: "[تفعيل/ايقاف]",
  cooldowns: 5
};

console.log("DEBUG: Loaded 'محرك' command config.");

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;
  const action = args[0]?.toLowerCase();

  // Admin Check
  const admins = (global.config.ADMINBOT || []).map(String);
  if (!admins.includes(String(senderID))) {
    return api.sendMessage("❌ هذا الأمر مخصص لأدمن البوت فقط.", threadID);
  }

  // Handle "ايقاف" or "stop" or "off"
  if (action === "ايقاف" || action === "off" || action === "stop") {
    if (global.engineIntervals.has(threadID)) {
      clearInterval(global.engineIntervals.get(threadID));
      global.engineIntervals.delete(threadID);
      return api.sendMessage("⏹️ تم إيقاف المحرك في هذه المجموعة.", threadID);
    } else {
      return api.sendMessage("⚠️ المحرك ليس قيد التشغيل في هذه المجموعة.", threadID);
    }
  }

  // Handle "تفعيل" or "on" or "start"
  if (action === "تفعيل" || action === "on" || action === "start") {
    if (global.engineIntervals.has(threadID)) {
      return api.sendMessage("⚠️ المحرك قيد التشغيل بالفعل.", threadID);
    }

    api.sendMessage("🚀 تم تفعيل المحرك بنجاح (رسالة كل 40 ثانية).", threadID);

    const interval = setInterval(() => {
      api.sendMessage(`𝔸𝕝-𝕊𝔼ℝ𝕌𝕄

ᗩـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᙓـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᖇـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᙓـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ℱـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᙓـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ᗩـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᕊـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᘉـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ𒉛ـ𒂲ـ𒂭ـᗩـ𒅌ـ卍ـ𒉛ـ𒂲Ḱـ𒅌ــ𒉛ـ𒂲ـ𒂭ـᔕـ𒅌ـ𒉛ـ𒂲ـ𒂭ـᙢـ𒅌ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ℱـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᖇـ卍 ᔓـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᘉـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᓮــ𒉛ـ𒂲ـ𒂭ـ ᘉـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᓮـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ᙢـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـටـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ᕊـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᓮـ𒅌ـ卍ـ𒉛ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ᘉـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᓮـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـḰـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـ ᗩـ𒅌ـ卍ـ𒉛ـ𒂲ـ𒂭ـᔕـ𒅌ـ卍𒉛ـ𒂲ـ𒂭ـ 



ٰ







 ٛ        ,  ۬ ۬  ༐ 𝐊𝐈𝐍𝐆 𝑻𝑨𝑹𝑬𝑲







  ⏤͟͟͞͞  𝐇𝐀𝐃𝐎 𝐍𝐎 𝟗𝟗  ⏤͟͟͞`, threadID);
    }, 40 * 1000);

    global.engineIntervals.set(threadID, interval);
  } else {
    return api.sendMessage("⚠️ الاستخدام: !محرك [تفعيل/ايقاف]", threadID);
  }
};
