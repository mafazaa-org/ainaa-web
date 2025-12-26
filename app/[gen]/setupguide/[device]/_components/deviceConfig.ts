import { downloadAndroid, downloadWindows } from "@/importantLinks";
import { deviceName } from "../../../genData";

export interface DeviceConfig {
  icon: string;
  title: string;
  description: string;
  features: string[];
  downloadLink: string;
  otherDevicesFilter: (device: string) => boolean;
}

export const deviceConfigs: Record<deviceName, DeviceConfig> = {
  android: {
    icon: "/devices/android.svg",
    title: "تحميل تطبيق الاندرويد",
    description:
      "احمِ أجهزتك وعائلتك من المحتوى الضار على الإنترنت. تطبيقنا يوفر لك راحة البال مع حماية شاملة وسهلة الاستخدام.",
    features: [
      "حماية فورية من المواقع الضارة والمحتوى غير المناسب",
      "مراقبة نشاط الإنترنت وتقارير مفصلة للأهل",
      "تحكم كامل في أوقات استخدام الإنترنت",
      "واجهة سهلة الاستخدام ومناسبة لجميع أفراد العائلة",
      "تحديثات مستمرة لضمان أفضل مستوى حماية",
    ],
    downloadLink: downloadAndroid,
    otherDevicesFilter: (device) =>
      ["windows", "router"].includes(device) && device !== "android",
  },
  windows: {
    icon: "/devices/windows.svg",
    title: "تحميل تطبيق الويندوز",
    description:
      "احمِ أجهزتك وعائلتك من المحتوى الضار على الإنترنت. تطبيقنا يوفر لك راحة البال مع حماية شاملة وسهلة الاستخدام.",
    features: [
      "حماية فورية من المواقع الضارة والمحتوى غير المناسب",
      "مراقبة نشاط الإنترنت وتقارير مفصلة للأهل",
      "تحكم كامل في أوقات استخدام الإنترنت",
      "واجهة سهلة الاستخدام ومناسبة لجميع أفراد العائلة",
      "تحديثات مستمرة لضمان أفضل مستوى حماية",
    ],
    downloadLink: downloadWindows,
    otherDevicesFilter: (device) =>
      ["android", "router"].includes(device) && device !== "windows",
  },
  router: {
    icon: "/devices/router.svg",
    title: "",
    description: "",
    features: [],
    downloadLink: "",
    otherDevicesFilter: () => false,
  },
  linux: {
    icon: "/devices/linux.svg",
    title: "",
    description: "",
    features: [],
    downloadLink: "",
    otherDevicesFilter: () => false,
  },
  ios: {
    icon: "/devices/ios.svg",
    title: "",
    description: "",
    features: [],
    downloadLink: "",
    otherDevicesFilter: () => false,
  },
};
