import { Accordion } from "@/src/components/ui/display";
import { ScreenLayout } from "@/src/components/ui/layout";

export default function Home() {
  return (
    <ScreenLayout hasTabBar>
      <Accordion
        items={[
          { id: 1, title: "title", description: "description" },
          { id: 2, title: "title", description: "description" },
        ]}
      />
    </ScreenLayout>
  );
}
