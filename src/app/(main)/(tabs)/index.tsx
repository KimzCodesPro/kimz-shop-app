import { Accordion } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";

export default function Home() {
  return (
    <ScreenLayout hasTabBar>
      <Accordion
        items={[
          {
            id: 1,
            title: "title",
            description:
              "description description description description v vdescription description description description v v v vvdescriptiondescription description description v description",
          },
          { id: 2, title: "title", description: "description" },
        ]}
      />
    </ScreenLayout>
  );
}
