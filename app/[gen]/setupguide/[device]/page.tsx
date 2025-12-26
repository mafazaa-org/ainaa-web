import { genName } from "@/app/appTypes";
import { deviceName, genParam, gensParams } from "../../genData";
import setupGuideData, { genSetupGuideData } from "../setupGuideData";
import { deviceConfigs } from "./_components/deviceConfig";
import DeviceDownloadPage from "./_components/DeviceDownloadPage";
import RouterPage from "./_components/RouterPage";
import deviceData, { deviceParams } from "./deviceData";

function Page({ params }: { params: { device: deviceName; gen: genName } }) {
  const dev =
    Array.isArray(deviceData[params.gen]) &&
    deviceData[params.gen].find((value) => value.device === params.device);
  if (!dev) {
    return <div>الجهاز غير موجود أو غير مدعوم حالياً.</div>;
  }
  const genGuide: genSetupGuideData = setupGuideData[params.gen];
  // Only Windows and Android should show the download page
  if (dev.device === "windows" || dev.device === "android") {
    const config = deviceConfigs[dev.device];
    if (config) {
      return (
        <DeviceDownloadPage
          device={dev.device}
          genGuide={genGuide}
          deviceConfig={config}
        />
      );
    }

  }
  if (dev.device === "router") {
    return (
      <RouterPage gen={params.gen} genGuide={genGuide} device={dev} />
    );
  }
}
export default Page;

export async function generateStaticParams() {
  return gensParams.flatMap((gen: genParam) =>
    deviceData[gen.gen].map((device: deviceParams) => ({
      gen: gen.gen,
      device: device.device,
    }))
  );
}
