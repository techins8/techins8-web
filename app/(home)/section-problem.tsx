import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const t = useTranslations("HomePage.Problem");

  return (
    <section className="mt-44">
      <div className="mb-12 max-w-[650px] flex flex-col mx-auto px-4">
        <h2 className="font-bold text-center text-3xl sm:text-4xl text-title !leading-tight">
          {t("mainTitle.prefix")}
          <span className="text-primary"> {t("mainTitle.highlight")} </span>
          {t("mainTitle.suffix")}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-[1120px] mx-auto px-4">
        {/* Top large card */}
        <Card className="border overflow-hidden">
          <CardContent className="flex flex-col md:flex-row items-stretch p-0">
            <div className="flex-1 space-y-6 p-6 sm:p-10">
              <h3 className="font-bold text-2xl text-title !leading-tight">
                <span className="text-primary">{t("mainCard.title.highlight")} </span>
                {t("mainCard.title.suffix")}
              </h3>
              <ul className="space-y-4">
                {t.raw("mainCard.bulletPoints").map((point: string, index: number) => (
                  <li key={index} className="flex items-start sm:items-center gap-3 text-muted">
                    <Image
                      src="/images/icons/orange-cross.svg"
                      alt="Orange cross"
                      width={21}
                      height={21}
                      className="mt-1 sm:mt-0"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <Image
                src="/images/illustrations/problem-1.svg"
                alt="illustration of the first problem"
                width={500}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </CardContent>
        </Card>

        {/* Two columns grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left card - Full remote */}
          <Card className="border overflow-hidden">
            <CardContent className="flex flex-col md:flex-column items-stretch p-0">
              <h3 className="font-bold text-lg sm:text-xl flex-1 space-y-6 p-6 sm:p-10">
                {t("secondaryCards.remote.prefix")}{" "}
                <span className="text-primary">{t("secondaryCards.remote.highlight")}</span>{" "}
                {t("secondaryCards.remote.suffix")}
              </h3>

              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/illustrations/problem-2.svg"
                  alt="Remote work illustration"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Right column - Stacked cards */}
          <div className="space-y-6 flex flex-col h-full">
            <Card className="border overflow-hidden flex-1">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center">
                <h3 className="font-bold text-lg sm:text-xl">
                  {t("secondaryCards.rates.prefix")}{" "}
                  <span className="text-primary">{t("secondaryCards.rates.highlight")}</span>{" "}
                  {t("secondaryCards.rates.suffix")}
                </h3>
              </CardContent>
            </Card>
            <Card className="border overflow-hidden flex-1">
              <CardContent className="p-6 sm:p-8 h-full flex flex-col justify-center">
                <h3 className="font-bold text-lg sm:text-xl">
                  {t("secondaryCards.skills.prefix")}{" "}
                  <span className="text-primary">{t("secondaryCards.skills.highlight")}</span>
                  {t("secondaryCards.skills.suffix")}
                </h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
