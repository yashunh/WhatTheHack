export default function ThemePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Our Theme</h1>
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          Reflect's theme is designed to provide a calm, focused environment for your thoughts. 
          Our dark mode with purple accents creates a soothing atmosphere that's easy on the eyes, 
          allowing you to concentrate on what matters most - your ideas.
        </p>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-background"></div>
              <span className="mt-2 text-sm text-muted-foreground">Background</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-purple-600"></div>
              <span className="mt-2 text-sm text-muted-foreground">Primary</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-card"></div>
              <span className="mt-2 text-sm text-muted-foreground">Card</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-muted"></div>
              <span className="mt-2 text-sm text-muted-foreground">Muted</span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Typography</h2>
          <p className="text-muted-foreground mb-4">
            We use a clean, modern sans-serif font to ensure readability and visual appeal across all devices.
          </p>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Heading 1</h1>
            <h2 className="text-3xl font-semibold">Heading 2</h2>
            <h3 className="text-2xl font-semibold">Heading 3</h3>
            <p className="text-base">Body text</p>
          </div>
        </div>
      </div>
    </div>
  )
}

