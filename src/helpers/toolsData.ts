import { FileText, Scissors, Merge, Zap, Settings, Image } from "lucide-react";

export const toolCategories = [
  {
    label: "Image Tools",
    tools: [
      {
        id: "compress",
        label: "Image Compressor",
        icon: Zap,
        path: "/compress-image",
        description:
          "Compress and optimize JPEG, PNG, and GIF images instantly.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Stop Waiting, Start Loading: Your Ultimate Image Compressor</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Let's be honest: slow-loading websites and huge email attachments are frustrating. Our <strong>Image Compressor</strong> is here to fix that. It's the simple, powerful tool you need to slim down massive photos and graphics without making them look blurry or pixelated. We help you find that perfect balance between <strong>super-fast loading speeds</strong> and <strong>crystal-clear visual quality</strong>.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">How We Shrink Your Files (The Magic Behind the Slider)</h4>
    <p class="text-base leading-relaxed">
        We handle the technical stuff so you don't have to. When you compress an image, we use clever algorithms to identify and remove the redundant data that your eye won't even miss that's called <strong>lossy compression</strong> (mainly for JPEGs) and <strong>lossless compression</strong> (for PNGs and GIFs). This process is what results in massive file size reductions, making your photos web-ready.
    </p>
    <p class="text-base leading-relaxed">
        The <strong>Quality Slider</strong> is your best friend here. Want maximum savings? Push it lower. Need the absolute best quality possible? Keep it high. This control lets you dictate the perfect ratio for your specific needs, whether you're optimizing for speed or display quality.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Crucial: Your Privacy is Guaranteed (Secure Server Processing)</h4>
    <p class="text-base leading-relaxed">
        To ensure fast, high-quality results, your image files are securely uploaded to our encrypted server for processing. Unlike many online tools, we guarantee your privacy: <strong>We never store your files long-term.</strong> All uploads are immediately deleted from our server once the compression is complete or after a short processing window, ensuring your data remains private. You get instant results and total peace of mind.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Who Needs FastFileTools' Image Compressor?</h4>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Bloggers & Webmasters:</strong> Want Google to love your site? Faster loading times are key! Compressed images mean better SEO, improved Google PageSpeed scores, and happier visitors who won't click away.</li>
        <li><strong>Online Sellers & E-commerce:</strong> Customers demand quick visual access. Optimize your product photos to boost conversions and make your entire storefront feel snappier.</li>
        <li><strong>Everyday Users:</strong> Stop wrestling with email attachment limits. Compress your vacation photos or large scans quickly so you can send them in a snap or back them up without filling your cloud storage.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: Compress Your Image in Seconds</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Drop It:</strong> Drag your image file (JPEG, PNG, GIF, or WebP) into the upload zone, or click to select the file from your computer.</li>
        <li><strong>Slide & Decide:</strong> Adjust the Quality Slider to choose your desired compression level. We suggest starting around <strong>85%</strong> you'll be surprised how much size you save with minimal quality loss!</li>
        <li><strong>Hit Compress:</strong> Click the button, and watch the magic happen instantly.</li>
        <li><strong>Download:</strong> Grab your newly optimized, lightning-fast image file and see the size comparison!</li>
    </ol>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">We've Got Answers: Quick FAQ</h4>
    <div class="space-y-2 text-sm">
        <p><strong>Q: Will this change the physical size (width/height) of my photo?</strong></p>
        <p>A: Nope! We only touch the file size (the kilobytes or megabytes). The pixel dimensions of your image stay exactly the same.</p>

        <p><strong>Q: What's the best setting for web use?</strong></p>
        <p>A: For general web use, most people find 80% to 85% gives the best visual result for the biggest file reduction. Test it out on a few images to find your preferred balance.</p>

        <p><strong>Q: Does it support transparency?</strong></p>
        <p>A: Yes! When compressing PNG and GIF files, we preserve the transparency while still reducing the overall file size efficiently.</p>
    </div>
</div>
        `,
      },
      {
        id: "tune",
        label: "Image Tuner",
        icon: Settings,
        path: "/tune-image",
        description: "Crop, resize, and convert images with precision.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">The Image Tuner: Your All-in-One Tool for Quick, Precise Image Edits</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Why download heavy, complex software just to make a quick edit? The <strong>Image Tuner</strong> is your fast, lightweight digital darkroom, designed for everyday adjustments like cropping, resizing, and format conversions. We’ve built this tool to be intuitive and powerful, so you can prepare profile pictures, optimize product shots, or fine-tune presentation graphics instantly, without needing a degree in graphic design.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">1. Precision Cropping: Focus on What Matters</h4>
    <p class="text-base leading-relaxed">
        Cropping is often the first step in image perfection. Whether you need to remove a distracting background element, adjust the composition, or fit a photo into a specific frame (like Instagram's square requirement), our cropping feature makes it simple.
    </p>
    <ul class="list-disc list-inside ml-4 space-y-1">
        <li><strong>Aspect Ratio Control:</strong> Easily select standard ratios (1:1, 4:3, 16:9) or define custom dimensions to ensure your image fits perfectly where you need it.</li>
        <li><strong>Simple Interface:</strong> Drag and drop the corners of the cropping window until the composition is exactly right.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">2. Effortless Resizing: Get the Dimensions Right</h4>
    <p class="text-base leading-relaxed">
        Images that are too big or too small can ruin a page layout. Resizing is crucial for website speed and compatibility. Our Image Tuner lets you adjust the pixel dimensions (width and height) of your image with precision.
    </p>
    <ul class="list-disc list-inside ml-4 space-y-1">
        <li><strong>Maintain Proportions:</strong> Choose to lock the aspect ratio so you can change the width without distorting the height, keeping your image looking natural.</li>
        <li><strong>Web Optimization:</strong> Quickly resize large camera photos down to web-friendly dimensions (e.g., 1200px wide) to drastically improve page loading speed without resorting to external compression tools.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">3. Seamless Format Conversion</h4>
    <p class="text-base leading-relaxed">
        Sometimes you have a PNG, but the platform you're uploading to only accepts JPG. Our tuner acts as a quick converter, allowing you to instantly switch between popular formats like <strong>JPG, PNG, and WebP</strong>. This is essential for compatibility and ensuring you're using the right format PNG for logos and transparency, JPG for photos, and WebP for ultimate web efficiency.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Your Data Stays Private. Always. (Secure Server Processing)</h4>
    <p class="text-base leading-relaxed">
        To power these fast, comprehensive edits, your files are securely uploaded to our server. We prioritize your privacy: all files and edits are processed using encrypted connections and are deleted permanently from our server shortly after the task is complete. We <strong>never</strong> store your original files long-term, guaranteeing your data is secure.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Make Quick Edits with the Image Tuner</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your image into the tool zone. We accept all major formats.</li>
        <li><strong>Adjust:</strong> Select your desired action (Crop, Resize, or Convert). Make your changes using the intuitive controls.</li>
        <li><strong>Apply & Download:</strong> Click the 'Apply Changes' button. The updated image is immediately ready for download. You control the process from start to finish!</li>
    </ol>
</div>
        `,
      },
      {
        id: "img-to-pdf",
        label: "Images to PDF",
        icon: FileText,
        path: "/img-to-pdf",
        description: "Convert multiple images into a single PDF document.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Combine & Organize: Your Fast Path from Scattered Images to One Professional PDF</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Dealing with a dozen scattered image files scans, screenshots, photos is a nightmare when it's time to share them. Our <strong>Images to PDF Converter</strong> solves this instantly by combining them all into one clean, professional, and universally accessible PDF document. Whether you're compiling receipts for a business trip, submitting a multi-page homework assignment, or creating a cohesive digital photo album, this tool streamlines your workflow.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why Convert Your Images into a PDF?</h4>
    <p class="text-base leading-relaxed">
        The Portable Document Format (PDF) is the gold standard for sharing documents digitally. When you convert images into a single PDF, you gain crucial benefits:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Universal Viewing:</strong> PDFs display exactly the same way on every computer, tablet, and phone, regardless of the user's operating system or software. No more worrying about viewers needing specific image programs.</li>
        <li><strong>Organization:</strong> Instead of sending (and managing) ten separate files, you manage one. This makes archiving, emailing, and cloud storage dramatically simpler.</li>
        <li><strong>Professionalism:</strong> A single, sequential PDF is the accepted standard for formal submissions, contracts, and business reports. It shows you've taken the time to organize your materials cleanly.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Essential Use Cases for This Tool</h4>
    <p class="text-base leading-relaxed">
        This tool is a lifesaver in several real-world scenarios:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Students:</strong> Easily combine photos of handwritten notes, multiple textbook scans, or separate pages of an essay into one file for professor submission.</li>
        <li><strong>Professionals:</strong> Compile expense receipts, physical documents scanned on your phone, or portfolio images into a single file for sharing with clients or accounting.</li>
        <li><strong>Personal Archiving:</strong> Take a collection of vacation photos or family documents and turn them into an easily manageable PDF photo album that preserves the order and quality.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Features That Give You Control</h4>
    <p class="text-base leading-relaxed">
        We know order matters. After uploading your images, our tool allows you to:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Reorder Pages:</strong> Simply drag and drop the thumbnails to ensure your images appear in the correct sequence before the final PDF is generated.</li>
        <li><strong>No Long-Term Storage, Full Privacy:</strong> Your files are uploaded to our secure server for conversion, which is necessary to generate a high-quality PDF. We commit to <strong>immediately deleting</strong> your files and the converted PDF from our server shortly after the process is complete. Your private files are never stored long-term.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Create Your Perfect PDF in Three Simple Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Drop Your Files:</strong> Upload your JPG, PNG, GIF, or WebP images into the drop zone. You can select up to 20 files at once.</li>
        <li><strong>Arrange & Configure:</strong> Review the thumbnails. Reorder them as needed to set the page sequence.</li>
        <li><strong>Generate & Download:</strong> Click the 'Create PDF' button. Your unified, high-quality document will be instantly ready to download and share.</li>
    </ol>
</div>
        `,
      },
      {
        id: "img-to-jpeg",
        label: "Images To JPEG Converter",
        icon: Image,
        path: "/img-to-jpeg",
        description: "Convert various image formats to JPEG.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Go Universal: Convert Any Image to JPEG for Speed and Compatibility</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Need to make sure your photo works everywhere and loads fast? JPEG (or JPG) is the gold standard. It's the world's most trusted image format because it offers an unbeatable balance: great image quality packed into a tiny file size. Our <strong>Images to JPEG Converter</strong> takes those less-common or larger files (like PNG, GIF, or WebP) and instantly turns them into reliable, web-friendly JPEGs.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Understanding the JPEG Advantage: Why Lossy is Good</h4>
    <p class="text-base leading-relaxed">
        When you convert to JPEG, you're using <strong>lossy compression</strong>. Don't let the name scare you it's incredibly smart! JPEG compression intelligently removes the parts of the image data that your eye won't notice, leading to a massive reduction in file size. This is a game-changer, especially for digital photography, where images have complex color schemes and gradients.
    </p>
    <p class="text-base leading-relaxed">
        <strong>The payoff?</strong> Your converted images will:
        <ul class="list-disc list-inside ml-4 space-y-1 mt-2">
            <li><strong>Load Faster:</strong> Essential for websites, apps, and sending attachments.</li>
            <li><strong>Save Space:</strong> Drastically reduce the memory footprint on your drive or in the cloud.</li>
            <li><strong>Be Universally Compatible:</strong> Every device, every browser, and nearly every online service supports the JPEG format without fail.</li>
        </ul>
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">When is Converting to JPEG Essential?</h4>
    <p class="text-base leading-relaxed">
        While PNG is great for logos, JPEG is king for photos and general web sharing. You should use this converter when:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Handling Photos:</strong> You have a high-resolution camera photo that is too large to share or upload. Converting it to JPEG will slash its size while retaining perceived quality.</li>
        <li><strong>Meeting Upload Requirements:</strong> Many online platforms (from photo labs to job application portals) strictly require JPG/JPEG uploads. This tool guarantees compliance.</li>
        <li><strong>Creating Web Assets:</strong> Optimized JPEGs are the backbone of a fast website. Converting large PNG backgrounds or uncompressed graphics ensures quick delivery to your users.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">A Quick Note on Transparency (PNGs to JPEGs)</h4>
    <p class="text-base leading-relaxed">
        A key difference: JPEGs do not support transparency. If you convert a PNG with a transparent background, that transparent area will be automatically filled with a solid color, usually white. If you need to preserve transparency for overlays or logos, you should stick to the PNG format. For everything else, JPEG is the most efficient choice.
    </p>
    
    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Convert to JPEG with Total Privacy</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your files (PNG, GIF, BMP, etc.) into the conversion box. You can process multiple files in a single batch!</li>
        <li><strong>Convert Securely:</strong> The files are uploaded and converted on our secure, fast server. Your file data is <strong>never stored long-term</strong> and is deleted immediately after the conversion is complete.</li>
        <li><strong>Download:</strong> Grab your new, universally compatible JPEG(s). We make the process seamless, private, and fast.</li>
    </ol>
</div>
        `,
      },
      {
        id: "img-to-png",
        label: "Images To PNG Converter",
        icon: Image,
        path: "/img-to-png",
        description: "Convert various image formats to PNG.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">PNG Conversion: Get Perfect Transparency and Lossless Image Quality</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        If you're dealing with logos, icons, diagrams, or digital art, quality is everything. Our <strong>Images to PNG Converter</strong> is the tool you need to ensure your graphics look sharp and professional everywhere. PNG (Portable Network Graphics) is the gold standard for web graphics because it offers two features JPEGs can't touch: <strong>true transparency</strong> and <strong>lossless quality</strong>.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why PNG is Superior for Graphics (Lossless Explained)</h4>
    <p class="text-base leading-relaxed">
        PNG files use <strong>lossless compression</strong>. This is the opposite of JPEG’s approach. Lossless means that when the file is saved, <strong>no original visual data is thrown away</strong>. The quality you see on your screen is the quality that’s saved, every single time.
    </p>
    <p class="text-base leading-relaxed">
        Why should you convert to a lossless PNG?
        <ul class="list-disc list-inside ml-4 space-y-1 mt-2">
            <li><strong>Perfect Clarity:</strong> Ideal for images with sharp lines, text, and solid blocks of color where compression artifacts (fuzziness) are easily noticed.</li>
            <li><strong>No Degradation:</strong> You can save, open, edit, and re-save the file countless times without losing quality, making it perfect for master copies.</li>
            <li><strong>Design Fidelity:</strong> Ensures the color and detail you created in your design software are perfectly preserved on the web.</li>
        </ul>
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The Power of True Transparency</h4>
    <p class="text-base leading-relaxed">
        If you need a logo or icon to sit neatly on a colored background or a photo without a distracting white box, you need PNG. Its support for the <strong>alpha channel</strong> allows parts of the image to be fully transparent or semi-transparent, enabling seamless integration into any web design or document layout. Trying to achieve this with a JPEG is impossible JPEG forces every pixel to have a color.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Who Needs PNG Conversion?</h4>
    <p class="text-base leading-relaxed">
        This converter is essential for:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Designers & Developers:</strong> Preparing website assets, app icons, and graphics that require pixel-perfect alignment and transparent backgrounds.</li>
        <li><strong>Academics & Students:</strong> Converting charts, diagrams, and high-detail screenshots where text readability and clarity are paramount.</li>
        <li><strong>Anyone with Logos:</strong> Guaranteeing your brand identity is displayed correctly across all mediums, regardless of the background color.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick and Private Conversion Process</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload Files:</strong> Drop your source images (JPG, GIF, BMP, etc.) into the converter zone.</li>
        <li><strong>Instant, Secure Process:</strong> Your files are uploaded to our secure server for conversion. We <strong>do not store them long-term</strong> and delete all uploaded and converted files immediately after the process is completed, guaranteeing your privacy.</li>
        <li><strong>Download Perfect PNGs:</strong> Retrieve your new, lossless PNG files, ready for use in any project where clarity and transparency matter most.</li>
    </ol>
</div>
        `,
      },
    ],
  },
  {
    label: "PDF Tools",
    tools: [
      {
        id: "pdf-to-img",
        label: "PDF To Images Converter",
        icon: Image,
        path: "/pdf-to-img",
        description: "Extract pages from a PDF and convert them to images.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Unlocking Your PDFs: Convert Every Page into a High-Quality Image</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        PDFs are perfect for sharing documents, but sometimes you need the content to be flexible, ready for social media, or embeddable on a website. Our <strong>PDF to Images Converter</strong> is designed to quickly and securely split your PDF document and turn every page into a standalone image file (JPG or PNG). This gives you total control over the content, allowing you to use it in ways the fixed PDF format simply doesn't allow.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why Convert PDF Pages into Images?</h4>
    <p class="text-base leading-relaxed">
        Switching a page from PDF format to a common image type (like JPG or PNG) opens up a world of possibilities for sharing and presentation:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Social Media Sharing:</strong> You can't post a PDF on Instagram or use it as a Twitter preview. Converting a key slide or page to a JPG makes it instantly shareable.</li>
        <li><strong>Website Embedding:</strong> Images load faster and are easier to display on blogs or e-commerce sites than embedded PDFs. Extracting a product sheet or diagram as a PNG ensures it integrates seamlessly.</li>
        <li><strong>PowerPoint/Google Slides:</strong> Easily grab graphics, charts, or full slides from a PDF report and insert them directly into a presentation without any loss of formatting.</li>
        <li><strong>Creating Thumbnails:</strong> Need a small, visual preview of your document? Converting the first page to a JPG gives you the perfect thumbnail for filing or quick viewing.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Control Your Output: Choosing JPG or PNG</h4>
    <p class="text-base leading-relaxed">
        Our tool lets you decide whether to convert your pages to JPEG or PNG, giving you control over the final result:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Choose JPG:</strong> Best for multi-color pages, reports, or slides that contain photographs. The JPEG compression will ensure the resulting images are as small as possible for fast web loading.</li>
        <li><strong>Choose PNG:</strong> Best for documents with sharp text, diagrams, and solid blocks of color. PNG is lossless, guaranteeing the highest quality and clarity for text and lines.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Your Files Are Private. The Process is Fast. (Secure Server Processing)</h4>
    <p class="text-base leading-relaxed">
        To ensure accurate extraction, your PDF is securely uploaded to our server for processing. We prioritize your privacy: all files are handled using encrypted connections and are <strong>permanently deleted from our server</strong> immediately after the image files are generated. Your confidential reports and documents are never stored long-term.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: Extract Images from Your PDF</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your PDF document into the tool zone.</li>
        <li><strong>Select Format:</strong> Choose whether you want the output as JPG (smaller file size) or PNG (higher quality).</li>
        <li><strong>Convert & Download:</strong> The tool will generate a separate image file for every page in your PDF. You can then download all images in one convenient ZIP file or select only the specific pages you need.</li>
    </ol>
</div>
        `,
      },
      {
        id: "split-pdf",
        label: "Split PDF",
        icon: Scissors,
        path: "/split-pdf",
        description: "Extract specific pages or ranges from a PDF file.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Split PDF: Precisely Extract Pages and Share Only What's Necessary</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Have you ever struggled to email a massive report, or needed to share just one section of a long contract without exposing the rest of the document? Our <strong>Split PDF</strong> tool is the smart, fast solution. It lets you slice large PDF files into smaller, more manageable documents, giving you complete control over which pages you keep and which pages you share. Stop sending huge files extract only the pages you actually need!
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why You Need to Split Your PDFs</h4>
    <p class="text-base leading-relaxed">
        Splitting a PDF isn't just about reducing file size; it's about document security, efficiency, and professional presentation:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Security & Privacy:</strong> If a document contains both public and private information, splitting allows you to isolate and share the public sections while keeping the sensitive pages secure.</li>
        <li><strong>Emailing & Uploading:</strong> Many email providers and online portals have strict file size limits. Splitting a 50MB report into several smaller, chapter-sized PDFs ensures successful delivery every time.</li>
        <li><strong>Organization:</strong> Break up large e-books, compiled notes, or training manuals into individual chapters or modules for easier reading and distribution to a team or client.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Flexibility: Extract Pages Your Way</h4>
    <p class="text-base leading-relaxed">
        Our tool gives you precise control over the extraction process. You can choose exactly how you want to break down your document:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Individual Pages:</strong> Need page 7 and page 22? Simply select those numbers to extract them into separate PDFs, or combine them into a single new file.</li>
        <li><strong>Page Ranges:</strong> Easily define a chapter by entering a range like "5-12" to pull out a sequence of pages quickly.</li>
        <li><strong>Split Every Page:</strong> For maximum flexibility, you can opt to automatically split the entire PDF into single-page documents, ready for reorganization or deletion.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The FastFileTools Promise: Secure Server Processing</h4>
    <p class="text-base leading-relaxed">
        Handling contracts and reports requires trust. To ensure accurate splitting, your PDF is securely uploaded to our powerful server. We guarantee your privacy: all processing is done over an encrypted connection, and your files are <strong>permanently deleted from our server</strong> immediately after the task is complete.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: How to Split Your PDF Document</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your large PDF file into the upload zone.</li>
        <li><strong>Define:</strong> Use the on-screen tools to clearly define the individual pages or page ranges you wish to extract (e.g., '1, 4, 10-15').</li>
        <li><strong>Download:</strong> Click 'Split PDF'. Your selected pages will be quickly generated into a new, smaller PDF file, ready to download instantly.</li>
    </ol>
</div>
        `,
      },
      {
        id: "merge-pdf",
        label: "Merge PDFs",
        icon: Merge,
        path: "/merge-pdf",
        description: "Combine multiple PDFs into one unified document.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Merge PDFs: Combine Multiple Documents into One Cohesive File, Instantly</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Dealing with fragmented documents can be a headache. Whether you have multiple contracts, separate chapters of a book, or a mix of invoices and receipts, you need one place to put it all. Our <strong>Merge PDFs</strong> tool is the seamless solution for combining two or more PDF files into a single, unified document. It saves you time, prevents lost files, and ensures a professional presentation every time.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The Power of Unification: Why Merge Documents?</h4>
    <p class="text-base leading-relaxed">
        Merging documents is more than just stacking files; it’s about creating efficiency and control in your workflow:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Effortless Archiving:</strong> Instead of keeping three separate quarterly reports, merge them into one comprehensive annual file for simple storage and future retrieval.</li>
        <li><strong>Professional Submission:</strong> When submitting a proposal, you can combine the contract, the technical specifications, and the pricing sheet into one clean file, ensuring the recipient reads them in the correct order.</li>
        <li><strong>Simplified Sharing:</strong> Emailing one merged PDF is far easier and less prone to errors than attaching six different files that might open out of sequence.</li>
        <li><strong>Compiling Notes:</strong> Students and researchers can merge source materials, notes, and bibliographies into a single research paper file.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Key Feature: Full Control Over Page Order</h4>
    <p class="text-base leading-relaxed">
        Merging files is useless if they end up in the wrong order. Our tool gives you full drag-and-drop control <em>before</em> the final document is created. You can upload all your files, then easily reorganize them on screen to ensure the chapters, attachments, or annexes appear exactly where they should be in the final, combined PDF. You control the narrative flow from start to finish.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Safety Guaranteed: Secure Server Processing</h4>
    <p class="text-base leading-relaxed">
        Confidential contracts and business documents should never be handled carelessly. To ensure a perfect merge, your files are securely uploaded to our server. We prioritize your privacy: all merging is done over an encrypted connection, and your files are <strong>permanently deleted from our server</strong> immediately after the unified document is ready for download.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: How to Merge Your PDFs in Seconds</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop all the PDF files you want to combine into the tool zone.</li>
        <li><strong>Organize:</strong> Drag and drop the files in the preview window until they are in the perfect order.</li>
        <li><strong>Merge & Download:</strong> Click the 'Merge PDFs' button. Your single, unified document will be ready to download instantly.</li>
    </ol>
</div>
        `,
      },
    ],
  },
];

export const toolPaths = toolCategories.flatMap((cat) =>
  cat.tools.map((tool) => tool.path)
);
