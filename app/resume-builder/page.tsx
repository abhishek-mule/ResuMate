import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { FileText, Upload, Download, Copy, Sparkles } from "lucide-react"
import { AIResumeForm } from "@/components/resume-builder/ai-resume-form"

export default function ResumeBuilderPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Resume Builder"
        text="Create and customize your professional resume with AI assistance."
      />
      
      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="preview">Preview & Download</TabsTrigger>
        </TabsList>
        
        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Professional", description: "Clean and traditional layout for corporate roles" },
              { name: "Modern", description: "Contemporary design with creative elements" },
              { name: "Minimal", description: "Simple and elegant with focus on content" },
              { name: "Technical", description: "Optimized for technical and engineering roles" },
              { name: "Executive", description: "Sophisticated design for leadership positions" },
              { name: "Creative", description: "Bold design for creative industry professionals" }
            ].map((template, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all cursor-pointer">
                <div className="aspect-[8.5/11] bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-muted-foreground/40" />
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Button size="sm" className="w-full">Use Template</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upload Your Existing Resume</CardTitle>
              <CardDescription>
                Upload your current resume and our AI will enhance it for you
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md">
              <Upload className="h-10 w-10 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Drag and drop your resume file here</p>
              <p className="text-xs text-muted-foreground mb-4">Supports PDF, DOCX, and TXT formats</p>
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" /> Browse Files
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span>Manual Resume Builder</span>
                </CardTitle>
                <CardDescription>
                  Build your resume section by section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p className="text-sm text-muted-foreground">Name, contact details, location, and professional links</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Edit Section</Button>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Professional Summary</h3>
                    <p className="text-sm text-muted-foreground">Brief overview of your experience, skills, and career goals</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Edit Section</Button>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Work Experience</h3>
                    <p className="text-sm text-muted-foreground">Your employment history, achievements, and responsibilities</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Edit Section</Button>
                  </div>
                  
                  <Button className="w-full gap-2">
                    <FileText className="h-4 w-4" /> Add New Section
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <AIResumeForm />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="design" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Customization</CardTitle>
              <CardDescription>
                Customize the look and feel of your resume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Layout Options</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["Single Column", "Two Column", "Mixed Layout"].map((layout, i) => (
                      <div key={i} className="border rounded-md p-3 text-center cursor-pointer hover:border-primary">
                        <div className="aspect-square bg-muted mb-2 flex items-center justify-center">
                          <div className={`w-2/3 h-2/3 ${i === 0 ? 'bg-primary/20' : i === 1 ? 'grid grid-cols-2 gap-1' : 'grid grid-cols-3 gap-1'}`}>
                            {i === 1 && (
                              <>
                                <div className="bg-primary/20"></div>
                                <div className="bg-primary/20"></div>
                              </>
                            )}
                            {i === 2 && (
                              <>
                                <div className="bg-primary/20 col-span-1"></div>
                                <div className="bg-primary/20 col-span-2"></div>
                              </>
                            )}
                          </div>
                        </div>
                        <p className="text-sm">{layout}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Color Themes</h3>
                  <div className="grid grid-cols-6 gap-3">
                    {["#000000", "#0f766e", "#1e40af", "#7e22ce", "#be123c", "#92400e"].map((color, i) => (
                      <div key={i} className="cursor-pointer">
                        <div className="aspect-square rounded-full" style={{ backgroundColor: color }}></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Typography</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["Modern", "Classic", "Creative"].map((font, i) => (
                      <div key={i} className="border rounded-md p-3 text-center cursor-pointer hover:border-primary">
                        <p className="text-sm">{font}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Spacing & Margins</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["Compact", "Standard", "Spacious"].map((spacing, i) => (
                      <div key={i} className="border rounded-md p-3 text-center cursor-pointer hover:border-primary">
                        <p className="text-sm">{spacing}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Resume Preview</CardTitle>
                <CardDescription>
                  Preview how your resume will look to employers
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center p-6">
                <div className="w-full max-w-[400px] aspect-[8.5/11] border shadow-md bg-white relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-muted-foreground/40" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Export Options</CardTitle>
                <CardDescription>
                  Download or share your completed resume
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download as PDF
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="h-4 w-4" /> Download as DOCX
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Copy className="h-4 w-4" /> Copy Link to Share
                  </Button>
                  <div className="p-4 border rounded-md bg-muted/50 mt-6">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> AI Feedback
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your resume is well-structured and ATS-friendly. Consider adding more quantifiable achievements to strengthen your work experience section.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 w-[85%]"></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}