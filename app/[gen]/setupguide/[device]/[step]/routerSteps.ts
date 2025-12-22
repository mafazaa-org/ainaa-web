import {
	PrimaryHigh,
	PrimaryLow,
	SecondaryHigh,
	SecondaryLow,
} from "@/importantLinks";
import { Steps } from "./stepData";

const routerSteps: { gen1: Steps } = {
	gen1: {
		// الخطوة 1: الدخول لصفحة الراوتر
		step1: [
			{
				type: "text",
				data: "ابدأ بالدخول إلى صفحة الراوتر في منزلك: افتح المتصفح واكتب في شريط العنوان 192.168.1.1.",
			},
			{
				type: "screenshot",
				data: 0,
			},
		],

		// الخطوة 2: تسجيل الدخول لصفحة الراوتر
		step2: [
			{
				type: "text",
				data: "عند دخولك لصفحة الراوتر، سيُطلب منك إدخال اسم المستخدم وكلمة المرور.",
			},
			{
				type: "text",
				data: "غالبًا ما تكون القيم الافتراضية:\n - (اسم المستخدم): admin \n - (كلمة المرور): admin \n جربهما أولًا.",
			},
			{
				type: "screenshot",
				data: 0,
			},
			{
				type: "text",
				data: "إذا لم تنجح البيانات الافتراضية، ابحث عن بيانات الدخول المطبوعة على ظهر الراوتر أو العلبة واستخدمها.",
			},
			{
				type: "screenshot",
				data: 1,
			},
			{
				type: "text",
				data: "إذا لم تنجح حتى بعد ذلك، فهذا يعني أن بيانات الدخول قد تم تغييرها، ويجب عليك الرجوع إلى الشخص المسؤول عن الشبكة.",
			},
		],

		// الخطوة 3: إعدادات الراوتر وتفعيل الحماية (DNS)
		step3: [
			{
				type: "text",
				data: "ابحث يدويًا عن إعدادات الـ (Primary DNS) و (Secondary DNS) داخل صفحة الراوتر.",
			},
			{
				type: "text",
				data: "ستجد هذه الإعدادات غالبًا داخل أحد الأقسام التالية:\n• (إعدادات الشبكة المحلية)(LAN Settings)\n• (إعدادات الإنترنت)(WAN Settings)\n• (إعدادات الاتصال بالإنترنت)(Internet Settings)\n• (إعدادات الشبكة)(Network Settings)\n• (إعدادات توزيع العناوين) (DHCP Settings)",
			},
			{
				type: "text",
				data: " إذا لم تتمكن من العثور عليها، تواصل مع الدعم.",
			},
			{
				type: "link",
				data: {
					href: "https://m.me/ainaa.mafazaa",
					text: "للتواصل عبر ماسنجر 📩",
				},
			},
			{
				type: "text",
				data: " (اختر مستوى الحماية المناسب لك):",
			},
			{
				type: "text",
				data: `✅ (حماية منخفضة):\n - (Primary DNS): ${PrimaryLow}\n - (Secondary DNS): ${SecondaryLow}`,
			},
			{
				type: "text",
				data: `✅ (حماية عالية):\n - (Primary DNS):  ${PrimaryHigh}\n - (Secondary DNS):  ${SecondaryHigh}`,
			},
			{
				type: "link",
				data: {
					href: "/setupvalues",
					text: "لمعرفة المزيد عن أنواع الحماية ➡️",
				},
			},
		],
	},
};

export default routerSteps;
