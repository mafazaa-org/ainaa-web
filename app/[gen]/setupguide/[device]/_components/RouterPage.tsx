import { genSetupGuideData } from "../../setupGuideData";
import { deviceParams } from "../deviceData";
import OtherDevicesSection from "@/app/_components/OtherDevicesSection";
import RouterContentSection from "./RouterContentSection";
import RouterHeroSection from "./RouterHeroSection";

interface RouterPageProps {
  gen: string;
  genGuide: genSetupGuideData;
  device: deviceParams;
}

export default function RouterPage({
  gen,
  genGuide,
  device,
}: RouterPageProps) {
  const otherDevices = genGuide.devices.filter(
    (d) =>
      !d.soon &&
      ["windows", "android"].includes(d.device) &&
      d.device !== device.device
  );

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <RouterHeroSection gen={gen} />

      {/* Main Content Section */}
      <RouterContentSection
        gen={gen}
        embeddedVideo={device.embeddedVideo}
      />

      {/* Other Devices Section */}
      <OtherDevicesSection
        devices={otherDevices}
        sectionClassName="w-full py-10 px-4 lg:px-[155px]"
        cardClassName="rounded-[40px]"
      />
    </div>
  );
}

