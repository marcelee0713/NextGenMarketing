import { MainServicePage } from "@/app/components/service";

interface PageParams {
  params: {
    serviceId: string;
  };
}

export default function Service({ params: { serviceId } }: PageParams) {
  return (
    <div className="flex w-full h-full bg-secondary relative">
      <MainServicePage serviceId={serviceId} />
    </div>
  );
}
