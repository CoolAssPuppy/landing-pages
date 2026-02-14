import Image from "next/image";

import { PageHeader, FooterMinimal, ContentWrapper, Section } from "@/components/layout";
import { ContentBlock, SocialProof, FormSection } from "@/components/blocks";
import { WebinarPlatformBadge } from "@/components/blocks/webinar-platform-badge";
import type { WebinarPageConfig, SpeakerConfig, AgendaItem } from "@/types/page-config";

interface WebinarTemplateProps {
  config: WebinarPageConfig;
}

export function WebinarTemplate({ config }: WebinarTemplateProps) {
  const { slug, hero, webinar, speakers, agenda, contentBlocks, socialProof, form } = config;

  return (
    <div className="min-h-screen flex flex-col">
      <PageHeader />

      <main className="flex-1">
        {/* Hero section */}
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

              <WebinarDetails
                date={webinar.date}
                startTime={webinar.startTime}
                duration={webinar.duration}
              />

              <div className="mt-4">
                <WebinarPlatformBadge url={webinar.url} />
              </div>
            </div>
          </ContentWrapper>
        </Section>

        {/* Speakers */}
        {speakers && speakers.length > 0 && (
          <Section className="py-12 sm:py-16 bg-card">
            <ContentWrapper>
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-center mb-12">
                Meet the speakers
              </h2>
              <SpeakersGrid speakers={speakers} />
            </ContentWrapper>
          </Section>
        )}

        {/* Agenda */}
        {agenda && agenda.length > 0 && (
          <Section className="py-12 sm:py-16">
            <ContentWrapper>
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground text-center mb-12">
                Agenda
              </h2>
              <AgendaTimeline items={agenda} />
            </ContentWrapper>
          </Section>
        )}

        {/* Content blocks */}
        {contentBlocks?.map((block, index) => (
          <ContentBlock key={index} config={block} />
        ))}

        {/* Social proof */}
        {socialProof && <SocialProof config={socialProof} />}

        {/* Registration form */}
        <FormSection
          config={form}
          formName={slug}
          pageSlug={slug}
          pageUrl={`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${slug}`}
        />
      </main>

      <FooterMinimal />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface WebinarDetailsProps {
  date: string;
  startTime: string;
  duration: string;
}

function WebinarDetails({ date, startTime, duration }: WebinarDetailsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <span className="font-medium text-foreground">Date:</span> {date}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="font-medium text-foreground">Time:</span> {startTime}
      </span>
      <span className="flex items-center gap-1.5">
        <span className="font-medium text-foreground">Duration:</span> {duration}
      </span>
    </div>
  );
}

interface SpeakersGridProps {
  speakers: SpeakerConfig[];
}

function SpeakersGrid({ speakers }: SpeakersGridProps) {
  const gridCols =
    speakers.length === 1
      ? "max-w-sm mx-auto"
      : speakers.length === 2
        ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-8 ${gridCols}`}>
      {speakers.map((speaker) => (
        <div
          key={speaker.name}
          className="flex flex-col items-center text-center p-6 rounded-md border border-border bg-background"
        >
          {speaker.avatar && (
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={speaker.avatar.src}
                alt={speaker.avatar.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          )}
          <h3 className="text-lg font-medium text-foreground">{speaker.name}</h3>
          <p className="text-sm text-muted-foreground">
            {speaker.role}
            {speaker.company && `, ${speaker.company}`}
          </p>
          {speaker.bio && (
            <p className="mt-3 text-sm text-muted-foreground">{speaker.bio}</p>
          )}
        </div>
      ))}
    </div>
  );
}

interface AgendaTimelineProps {
  items: AgendaItem[];
}

function AgendaTimeline({ items }: AgendaTimelineProps) {
  return (
    <div className="max-w-2xl mx-auto space-y-0">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-6 pb-8 last:pb-0">
          {/* Vertical line */}
          {index < items.length - 1 && (
            <div className="absolute left-[7px] top-4 bottom-0 w-px bg-border" />
          )}

          {/* Dot */}
          <div className="relative flex-shrink-0 mt-1.5">
            <div className="w-[15px] h-[15px] rounded-full border-2 border-primary bg-background" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-1">
              <span className="text-sm font-medium text-primary whitespace-nowrap">
                {item.time}
              </span>
              <h3 className="text-base font-medium text-foreground">{item.title}</h3>
            </div>
            {item.description && (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            )}
            {item.speaker && (
              <p className="text-xs text-muted-foreground mt-1">Speaker: {item.speaker}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
