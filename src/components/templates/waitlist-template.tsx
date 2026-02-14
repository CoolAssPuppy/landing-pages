"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PageHeader, FooterMinimal, ContentWrapper, Section } from "@/components/layout";
import { FormSection, Stats } from "@/components/blocks";
import { Icon } from "@/components/ui/icon";
import type { WaitlistPageConfig } from "@/types/page-config";

interface WaitlistTemplateProps {
  config: WaitlistPageConfig;
}

export function WaitlistTemplate({ config }: WaitlistTemplateProps) {
  const { slug, hero, countdown, features, form, socialProof } = config;

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <Section className="py-16 sm:py-24 text-center">
          <ContentWrapper>
            <div className="max-w-3xl mx-auto">
              {hero.badge && (
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                  {hero.badge}
                </span>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6">
                {hero.title}
              </h1>

              {hero.subtitle && (
                <p className="text-xl text-muted-foreground mb-4">
                  {hero.subtitle}
                </p>
              )}

              {hero.description && (
                <div className="text-lg text-muted-foreground mb-8">
                  {typeof hero.description === "string" ? (
                    <p>{hero.description}</p>
                  ) : (
                    hero.description
                  )}
                </div>
              )}

              {countdown && (
                <CountdownTimer
                  targetDate={countdown.targetDate}
                  label={countdown.label}
                />
              )}
            </div>
          </ContentWrapper>
        </Section>

        {/* Features Preview */}
        {features && features.length > 0 && (
          <Section className="py-12 sm:py-16 bg-card">
            <ContentWrapper>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    {feature.icon && (
                      <div className="flex justify-center mb-4">
                        {typeof feature.icon === "string" ? (
                          <Icon name={feature.icon} size={32} />
                        ) : (
                          feature.icon
                        )}
                      </div>
                    )}
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <div className="text-muted-foreground">
                      {typeof feature.description === "string" ? (
                        <p>{feature.description}</p>
                      ) : (
                        feature.description
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ContentWrapper>
          </Section>
        )}

        {/* Form Section */}
        <FormSection
          config={form}
          formName={slug}
          pageSlug={slug}
          pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${slug}`}
          className="py-12 sm:py-16"
        />

        {/* Social Proof */}
        {socialProof && (socialProof.stats || socialProof.logos) && (
          <Section className="py-12 sm:py-16 border-t border-border">
            <ContentWrapper>
              {socialProof.stats && socialProof.stats.length > 0 && (
                <Stats
                  stats={socialProof.stats.map(s => ({ value: s.value, label: s.label }))}
                  className="mb-12"
                />
              )}

              {socialProof.logos && socialProof.logos.length > 0 && (
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {socialProof.logos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.src}
                      alt={logo.name}
                      width={120}
                      height={32}
                      className="h-8 w-auto object-contain"
                    />
                  ))}
                </div>
              )}
            </ContentWrapper>
          </Section>
        )}
      </main>

      <FooterMinimal />
    </div>
  );
}

interface CountdownTimerProps {
  targetDate: string;
  label?: string;
}

function CountdownTimer({ targetDate, label }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mb-8">
      {label && (
        <p className="text-sm text-muted-foreground mb-4">{label}</p>
      )}
      <div className="flex justify-center gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-muted border border-border">
        <span className="text-2xl font-medium text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-2">{label}</span>
    </div>
  );
}

function calculateTimeLeft(targetDate: string) {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
