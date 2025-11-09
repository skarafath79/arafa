import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Link } from "lucide-react";

const Research = () => {
  return (
    <section id="research" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-poppins font-bold">Research & Publications</h2>
            <p className="text-muted-foreground font-inter mt-2">Contributing to the advancement of technology and sustainable solutions</p>
          </div>

          <Card className="p-6 bg-card/50 sm:backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-poppins font-semibold text-xl">Automatic e-waste sorting with computer vision</h3>
                <p className="text-sm text-muted-foreground mt-2 mb-4">Developing innovative computer vision solutions for automated electronic waste classification and sorting to promote sustainable recycling practices.</p>

                <div className="flex items-center gap-3">
                  <Badge className="bg-primary/5 border-primary/20">Computer Vision</Badge>
                  <Badge className="bg-primary/5 border-primary/20">Sustainability</Badge>
                  <Badge className="bg-primary/5 border-primary/20">Machine Learning</Badge>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium flex items-center gap-2" disabled>
                    <Link className="w-4 h-4" />
                    View Paper (Coming Soon)
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground font-medium flex items-center gap-2" disabled>
                    <Link className="w-4 h-4" />
                    View Repository (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;
