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
<h3 class="text-2xl font-bold text-gray-800 mb-4">Your Ultimate Image Compressor</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Let's be honest, slow-loading websites and huge email attachments are frustrating. Our image compressor is here to fix that, it's a simple tool you can use to compress or slim down massive photos and graphics without making them look blurry or pixelated. This tools helps you find that perfect balance between fast loading speeds and clear visual quality, all without changing the physical size (width and height) of your photo.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">How We Shrink Your Files</h4>
    <p class="text-base leading-relaxed">
        Don't worry you don't have to mess with technical stuff. When you compress an image, we use clever algorithms to identify and remove the redundant data that your eye won't even notice, that's called lossy compression (mainly for JPEGs) and lossless compression (for PNGs and GIFs). This process is what results in massive file size reductions, making your photos load faster on when you share/publish them (on your blog, social media...).
    </p>
    <p class="text-base leading-relaxed">
        The quality slider lets you control how much you want to compress the image. If you need a smaller size slide it lower but if you want the absolute best quality possible, keep it high. This control lets you dictate the perfect ratio for your specific needs. For general web use, we find that a quality setting between 80% and 85% offers great visual results for a decent reduction in file size.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">A Note on Quality and Re-Compression</h4>
    <p class="text-base leading-relaxed">
        Our compressor is designed to work with all major formats, including those that support transparency (PNGs and GIFs). We preserve transparency while still reducing the file size. However, because the file is compressed, we advise against re-compressing an already compressed image multiple times, especially with JPEGs, as doing so will compound the data loss and quickly lead to noticeable degradation in image quality. Always compress the original, highest-quality source file just once.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Your Privacy is Guaranteed</h4>
    <p class="text-base leading-relaxed">
        To ensure fast, high-quality results, your image files are securely uploaded to our server for processing. Unlike many online tools, we guarantee your privacy: We never store your files long-term. All uploads are deleted from our server after the compression is complete (usually two hours after processing the file), ensuring your data remains private. You get instant results and total peace of mind.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Who Needs FastFileTools' Image Compressor?</h4>
    <p class="text-base leading-relaxed">
        This tool isn't just for web developers. If your work or personal life involves managing digital images, the image compressor would come in handy:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Bloggers:</strong> Faster loading times are key, so compressed images mean better SEO, improved Google PageSpeed scores, and happier visitors who won't click away.</li>
        <li><strong>Online Sellers and E-commerce:</strong> Optimize your product photos to boost conversions and make your entire storefront feel snappier.</li>
        <li><strong>Everyday Users:</strong> Stop wrestling with email attachment limits. Compress your vacation photos or large scans quickly so you can send them in a snap or back them up without filling your cloud storage.</li>
        <li><strong>Digital Artists and Designers:</strong> Quickly generate smaller previews or versions of your high-resolution artwork for social media sharing.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: Compress Your Image in Seconds</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Drop It:</strong> Drag your image file (JPEG, PNG, GIF, or WebP) into the upload zone, or click to select the file from your computer.</li>
        <li><strong>Slide & Decide:</strong> Adjust the quality slider to choose your desired compression level. We suggest starting around 80%, you'll be surprised how much size you save with minimal quality loss!</li>
        <li><strong>Hit Compress:</strong> Click the button, and watch the magic happen instantly.</li>
        <li><strong>Download:</strong> Grab your newly optimized image file and see the size comparison!</li>
    </ol>
</div>
        `,
      },
      {
        id: "tune",
        label: "Image Tuner",
        icon: Settings,
        path: "/tune-image",
        description: "Adjust image brightness, contrast, and saturation.",
        longDescription: `
<h3 class="text-2xl font-bold text-gray-800 mb-4">Your Tool for Quick Image Edits</h3>

<div class="space-y-6 text-gray-700">
    <p class="text-base leading-relaxed">
        Why download heavy, complex software just to make a quick edit? The image tuner is your fast, lightweight digital darkroom, designed for everyday adjustments like color, light, and tone corrections. We've built this tool to be intuitive and powerful, so you can perfectly balance your images, fine-tune presentation graphics, or fix dull photos instantly, without needing a degree in graphic design.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Mastering Tone: Brightness, Contrast, and Saturation</h4>
    <p class="text-base leading-relaxed">
        The true power of the image tuner lies in its precision controls for the three core elements of image quality: Brightness, Contrast, and Saturation. These adjustments happen quickly on our server, giving you professional results that dramatically improve the overall look and feel of your digital photos.
    </p>

    <h5 class="text-lg font-semibold text-gray-800 mt-4">1. Brightness Adjustment</h5>
    <p class="text-base leading-relaxed">
        Too dark? Too light? Brightness controls the overall light intensity of your image. Increasing brightness can reveal details in shadows, while decreasing it can help photos that were overexposed. Use this setting to ensure your image isn't lost in the dark or completely washed out.
    </p>

    <h5 class="text-lg font-semibold text-gray-800 mt-4">2. Contrast Control</h5>
    <p class="text-base leading-relaxed">
        Contrast is the difference between the darkest and lightest areas of your image. A photo with high contrast looks vivid and dramatic, while low contrast can look muted or flat. Adjusting this slider is essential for adding "pop" to dull photos or softening overly harsh images to create a more balanced and professional feel.
    </p>

    <h5 class="text-lg font-semibold text-gray-800 mt-4">3. Saturation Tuning</h5>
    <p class="text-base leading-relaxed">
        Saturation determines the intensity of the colors in your image. Need vibrant colors for a holiday snap? Increase the saturation. Want a softer, retro look? Decrease it slightly. The image tuner allows you to accurately control the color depth, making sure your image's palette is exactly what you intend it to be.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Seamless Format Conversion for Compatibility</h4>
    <p class="text-base leading-relaxed">
        While the core function is tuning, our tool ensures your final edited file is ready for any platform. The image tuner acts as a quick converter, allowing you to instantly output your edited image into popular formats like JPG, PNG, and WebP (if supported by the original input). This is essential for compatibility and making sure you're using the right format, PNG for logos and transparency, JPG for photos, and WebP for ultimate web efficiency.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Your Data Stays Private.</h4>
    <p class="text-base leading-relaxed">
        To power these fast, comprehensive edits, your files are securely uploaded to our server for processing. We prioritize your privacy: all files and edits are processed using encrypted connections and are deleted permanently from our server shortly after the task is complete (usually two hours after processing the file). We never store your original files long-term, guaranteeing your data is secure and giving you peace of mind.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Who Needs FastFileTools' Image Tuner?</h4>
    <p class="text-base leading-relaxed">
        The image tuner is a critical tool for anyone who needs immediate, high-quality photo corrections:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Social Media Users:</strong> Quickly fine-tune photos for Instagram or Facebook to ensure they look perfect without installing a heavy app.</li>
        <li><strong>Real Estate Agents:</strong> Improve lighting and color in property photos to make listings more appealing and professional.</li>
        <li><strong>Presentation Creators:</strong> Adjust downloaded images to match the brightness and contrast of your existing slides, creating a cohesive deck.</li>
        <li><strong>Bloggers and Content Creators:</strong> Instantly correct photos taken under poor lighting conditions before uploading to a website.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: Tune Your Image in Seconds</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your image into the tool zone. We accept all major formats.</li>
        <li><strong>Adjust:</strong> Use the Brightness, Contrast, and Saturation sliders to make your desired changes. The live preview will show the result instantly.</li>
        <li><strong>Apply & Download:</strong> Click the 'Tune' button. The updated image is processed and immediately ready for secure download. You control the process from start to finish!</li>
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
        Dealing with a dozen scattered image files, scans, screenshots, photos, is a nightmare when it's time to share them. Our images to pdf converter solves this instantly by combining them all into one clean, professional, and universally accessible PDF document. Whether you're compiling receipts for a business trip, submitting a multi-page homework assignment, or creating a cohesive digital photo album, this tool streamlines your workflow.
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
        This tool is a lifesaver in several real-world scenarios, making digital document management simple and efficient for everyone:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Students:</strong> Easily combine photos of handwritten notes, multiple textbook scans, or separate pages of an essay into one file for professor submission.</li>
        <li><strong>Professionals:</strong> Compile expense receipts, physical documents scanned on your phone, or portfolio images into a single file for sharing with clients or accounting. This saves time and ensures all documentation stays together.</li>
        <li><strong>Personal Archiving:</strong> Take a collection of vacation photos or family documents and turn them into an easily manageable PDF photo album that preserves the order and quality.</li>
        <li><strong>Webmasters & Sellers:</strong> Generate high-quality product sheets or technical manuals from multiple image sources and distribute them as one easy-to-download file.</li>
    </ul>
    
    <h4 class="text-xl font-semibold text-gray-800 mt-6">Maintaining Image Quality in Your PDF</h4>
    <p class="text-base leading-relaxed">
        When converting images to a PDF, we prioritize the original quality of your source files. Unlike some tools that compress or downgrade your images, our converter focuses on embedding the images into the PDF structure cleanly. This means your high-resolution photos or crisp documents remain sharp and clear within the final PDF, preserving legibility for text and detail in images. We support common web formats like JPG, PNG, GIF, and WebP, ensuring all your source material can be unified effortlessly.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Features That Give You Control</h4>
    <p class="text-base leading-relaxed">
        We know order matters. After uploading your images, our tool allows you to take full control before the final PDF is generated:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Reorder Pages:</strong> Simply drag and drop the file thumbnails (or use the provided controls) to ensure your images appear in the correct sequence. This is vital for multi-page reports or correctly ordering scanned documents.</li>
        <li><strong>Combine Multiple Files:</strong> You can upload up to 20 images at once, which the tool handles efficiently, generating a single, cohesive PDF document.</li>
        <li><strong>No Long-Term Storage, Full Privacy:</strong> Your files are uploaded to our secure server for conversion, which is necessary to generate a high-quality PDF. We commit to deleting your files and the converted PDF from our server shortly after the process is complete (usually within two hours). Your private files are never stored long-term.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Create Your Perfect PDF in Three Simple Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Drop Your Files:</strong> Upload your JPG, PNG, GIF, or WebP images into the drop zone. You can select up to 20 files at once.</li>
        <li><strong>Arrange & Configure:</strong> Review the thumbnails. Reorder them as needed to set the page sequence. Look for the handy tip that reminds you to reorder if necessary!</li>
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
        Need to make sure your photo works everywhere and loads fast? JPEG (or JPG) is the gold standard. It is the world's most trusted image format because it offers an unbeatable balance: great image quality packed into a tiny file size. Our images to jpeg converter takes those less-common or larger files (like PNG, GIF, or WebP) and instantly turns them into reliable, web-friendly JPEGs.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Understanding the JPEG Advantage: Why Lossy is Good</h4>
    <p class="text-base leading-relaxed">
        When you convert to JPEG, you are using lossy compression. Do not let the name scare you. This technique is incredibly smart because JPEG compression intelligently removes the parts of the image data that your eye will not notice, leading to a massive reduction in file size. This is a game-changer, especially for digital photography, where images have complex color schemes and gradients. The file size reduction can often be 50% or more compared to a PNG of the same image.
    </p>
    <p class="text-base leading-relaxed">
        The payoff? Your converted images will:
        <ul class="list-disc list-inside ml-4 space-y-1 mt-2">
            <li><strong>Load Faster:</strong> Essential for optimizing website performance, apps, and sending large attachments via email. Faster loading times improve SEO.</li>
            <li><strong>Save Space:</strong> Drastically reduce the memory footprint on your computer drive, external backup, or cloud storage platforms.</li>
            <li><strong>Be Universally Compatible:</strong> Every device, every browser, and nearly every online service supports the JPEG format without fail, eliminating technical errors.</li>
        </ul>
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">When is Converting to JPEG Essential?</h4>
    <p class="text-base leading-relaxed">
        While PNG is great for logos, JPEG is king for photos and general web sharing. You should use this converter when:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Handling Photos:</strong> You have a high-resolution camera photo that is too large to share or upload. Converting it to JPEG will slash its size while retaining perceived quality.</li>
        <li><strong>Meeting Upload Requirements:</strong> Many online platforms (from photo printing labs to job application portals) strictly require JPG/JPEG uploads. This tool guarantees compliance, saving you time and hassle.</li>
        <li><strong>Creating Web Assets:</strong> Optimized JPEGs are the backbone of a fast website. Converting large PNG backgrounds or uncompressed graphics ensures quick delivery to your users, leading to better user engagement.</li>
        <li><strong>Emailing:</strong> Sending a document or photo album with dozens of large images can clog up an inbox. Convert them all to JPEG first to ensure they fit within standard email size limits.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">A Quick Note on Transparency (PNGs to JPEGs)</h4>
    <p class="text-base leading-relaxed">
        A key difference between the formats is that JPEGs do not support transparency. If you convert a PNG that has a transparent background, the transparent area will be automatically filled with a solid color, usually white, or sometimes black, depending on the file's metadata. If you need to preserve transparency for overlays or logos, you should stick to the PNG format. For high-detail photographs and images without transparency, JPEG is the most efficient choice for size and speed.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Converting Batches with Total Privacy</h4>
    <p class="text-base leading-relaxed">
        Our converter is designed to handle multiple files at once. You can upload a batch of PNGs and GIFs and convert them all to JPEGs in a single operation, greatly speeding up your workflow. The conversion happens quickly on our secure, fast server. Your file data is never stored long-term and is deleted shortly after the conversion is complete, guaranteeing your privacy throughout the process.
    </p>
    
    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Convert to JPEG in Three Simple Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your files (PNG, GIF, BMP, etc.) into the conversion box. You can process multiple files in a single batch!</li>
        <li><strong>Convert Securely:</strong> Click the 'Convert to JPEG' button. The files are quickly processed on our secure server.</li>
        <li><strong>Download:</strong> Grab your new, universally compatible JPEG(s). If you uploaded multiple files, you will have the option to download them individually or as one convenient ZIP file. We make the process seamless, private, and fast.</li>
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
        If you are dealing with logos, icons, diagrams, or digital art, quality is everything. Our images to png converter is the tool you need to ensure your graphics look sharp and professional everywhere. PNG (Portable Network Graphics) is the gold standard for web graphics because it offers two features JPEGs cannot touch: true transparency and lossless quality. It is the best format for preserving the integrity of non-photographic images.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why PNG is Superior for Graphics (Lossless Explained)</h4>
    <p class="text-base leading-relaxed">
        PNG files use lossless compression. This is the opposite of JPEG's approach. Lossless means that when the file is saved, no original visual data is thrown away. The quality you see on your screen is the quality that is saved, every single time, making it the perfect archive or working format for graphics.
    </p>
    <p class="text-base leading-relaxed">
        Why should you convert to a lossless PNG?
        <ul class="list-disc list-inside ml-4 space-y-1 mt-2">
            <li><strong>Perfect Clarity:</strong> Ideal for images with sharp lines, computer-generated text, and solid blocks of color where JPEG compression artifacts (fuzziness or blockiness) are easily noticed and distract the viewer.</li>
            <li><strong>No Degradation:</strong> You can save, open, edit, and re-save the file countless times without losing quality, making it perfect for master copies of graphics or web elements.</li>
            <li><strong>Design Fidelity:</strong> Ensures the color and detail you created in your design software are perfectly preserved when the image is published on the web or used in a document.</li>
        </ul>
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The Power of True Transparency</h4>
    <p class="text-base leading-relaxed">
        If you need a logo or icon to sit neatly on a colored background or a photo without a distracting white box, you need PNG. Its support for the alpha channel allows parts of the image to be fully transparent or semi-transparent, enabling seamless integration into any web design or document layout. This capability is essential for modern design and allows your images to blend into any platform's look and feel without a noticeable border. Trying to achieve this with a JPEG is impossible because JPEG forces every pixel to have a color.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Who Needs PNG Conversion?</h4>
    <p class="text-base leading-relaxed">
        This converter is essential for anyone who values clarity, precision, and design flexibility in their digital assets:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Designers & Developers:</strong> Preparing website assets, app icons, and graphics that require pixel-perfect alignment and transparent backgrounds. Converting from less-common formats ensures reliability.</li>
        <li><strong>Academics & Students:</strong> Converting charts, graphs, diagrams, and high-detail screenshots where text readability and clarity are paramount for research and presentation integrity.</li>
        <li><strong>Anyone with Logos:</strong> Guaranteeing your brand identity is displayed correctly across all mediums, regardless of the background color or platform where it is being used.</li>
        <li><strong>Users of Screenshots:</strong> Converting large, lossy JPEG screenshots into a crisp, clean PNG format for better visibility and archiving. The clear lines of a PNG are superior for capturing screen details.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick, Secure, and Batch Conversion Process</h4>
    <p class="text-base leading-relaxed">
        Our tool is built for speed and privacy. You can upload multiple files at once, and they will be converted simultaneously. This is highly efficient if you need to switch an entire folder of graphics to PNG. The conversion process is run on our secure server using encrypted connections. Critically, we do not store files long-term. All uploaded source images and the converted PNGs are deleted from our server shortly after the process is completed, guaranteeing your privacy. We offer the convenience of batch downloading your new PNGs as a single ZIP file.
    </p>
    
    <h4 class="text-xl font-semibold text-gray-800 mt-6">How to Convert to PNG in Three Simple Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload Files:</strong> Drop your source images (JPG, GIF, BMP, etc.) into the converter zone. Batch uploading is fully supported for maximum efficiency.</li>
        <li><strong>Instant, Secure Process:</strong> Click the 'Convert to PNG' button. Your files are quickly processed on our secure server.</li>
        <li><strong>Download Perfect PNGs:</strong> Retrieve your new, lossless PNG files, ready for use in any project where clarity and transparency matter most. You can download files individually or as a convenient ZIP archive.</li>
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
        PDFs are perfect for sharing documents, but sometimes you need the content to be flexible, ready for social media, or easily embeddable on a website. Our pdf to images converter is designed to quickly and securely split your PDF document and turn every page into a standalone image file (JPG or PNG). This gives you total control over the content, allowing you to use it in ways the fixed PDF format simply does not allow.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why Convert PDF Pages into Images?</h4>
    <p class="text-base leading-relaxed">
        Switching a page from PDF format to a common image type (like JPG or PNG) opens up a world of possibilities for sharing and presentation. It transforms static pages into dynamic visual assets:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Social Media Sharing:</strong> You cannot post a PDF on Instagram or use it as a Twitter preview. Converting a key slide or page to a JPG makes it instantly shareable across all social platforms.</li>
        <li><strong>Website Embedding:</strong> Images load faster and are far easier to display on blogs or e-commerce sites than embedded PDFs. Extracting a product sheet or diagram as a PNG ensures it integrates seamlessly without requiring complex code.</li>
        <li><strong>PowerPoint/Google Slides:</strong> Easily grab graphics, charts, or full slides from a PDF report and insert them directly into a presentation without any loss of formatting or editing issues.</li>
        <li><strong>Creating Thumbnails:</strong> Need a small, visual preview of your document? Converting the first page to a JPG gives you the perfect thumbnail for filing or quick viewing in file browsers.</li>
        <li><strong>Editing:</strong> Once converted to an image, you can open the file in any basic photo editor for quick annotation, highlighting, or cropping, which is much faster than dealing with complex PDF editing software.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Control Your Output: Choosing JPG or PNG</h4>
    <p class="text-base leading-relaxed">
        Our tool lets you decide whether to convert your pages to JPEG or PNG, giving you control over the final result's quality and file size. Making the right choice ensures your file is optimized for its final destination:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Choose JPG (Joint Photographic Group):</strong> This is the best format for multi-color pages, reports, or slides that contain complex photographs. The JPEG compression will ensure the resulting images are as small as possible for lightning-fast web loading.</li>
        <li><strong>Choose PNG (Portable Network Graphics):</strong> This is ideal for documents with sharp text, technical diagrams, and large blocks of solid color. PNG is a lossless format, guaranteeing the highest quality and perfect clarity for fine text and clean lines, ensuring no data is lost during the conversion process.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Handling Multi-Page Documents Efficiently</h4>
    <p class="text-base leading-relaxed">
        Whether you upload a single PDF or multiple documents, the converter handles the batch job efficiently. Every single page in the uploaded PDF will be extracted as its own separate image file. This allows you to work with your entire document page by page. Once the conversion is complete, the tool packages all these individual images into one convenient ZIP archive, making the download and organization process extremely simple. You do not have to download dozens of files manually.
    </p>
    
    <h4 class="text-xl font-semibold text-gray-800 mt-6">Your Files Are Private. The Process is Fast. (Secure Server Processing)</h4>
    <p class="text-base leading-relaxed">
        To ensure accurate extraction and high-quality results, your PDF is securely uploaded to our server for processing. We prioritize your privacy above all else: all files are handled using encrypted connections, and both the original PDF and the resulting image files are permanently deleted from our server shortly after the conversion is complete. Your confidential reports and documents are never stored long-term, guaranteeing your data's security.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: Extract Images from Your PDF in Three Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your PDF document(s) into the tool zone. We accept multiple PDFs for batch processing.</li>
        <li><strong>Select Format:</strong> Choose whether you want the output as JPG (smaller file size) or PNG (higher quality).</li>
        <li><strong>Convert & Download:</strong> The tool will generate a separate image file for every page in your PDF. You can then download all images in one convenient ZIP file or select only the specific pages you need individually.</li>
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
        Have you ever struggled to email a massive report, or needed to share just one section of a long contract without exposing the rest of the document? Our pdf splitter tool is the smart, fast solution. It lets you slice large PDF files into smaller, more manageable documents, giving you complete control over which pages you keep and which pages you share. Stop sending huge files and extract only the pages you actually need.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Why You Need to Split Your PDFs</h4>
    <p class="text-base leading-relaxed">
        Splitting a PDF is not just about reducing file size; it is about document security, efficiency, and professional presentation. Large documents are cumbersome to handle and share, making splitting an essential tool in your digital workflow:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Security & Privacy:</strong> If a document contains both public and private information, splitting allows you to isolate and share the public sections while keeping the sensitive pages secure and confidential.</li>
        <li><strong>Emailing & Uploading:</strong> Many email providers and online portals have strict file size limits. Splitting a 50MB report into several smaller, chapter-sized PDFs ensures successful delivery and upload every time.</li>
        <li><strong>Organization:</strong> Break up large e-books, compiled notes, or training manuals into individual chapters or modules for easier reading and distribution to a team or client. Smaller files are easier to archive and search.</li>
        <li><strong>Workflow Efficiency:</strong> When collaborating, often only a few specific pages need review. By splitting the PDF, you focus reviewers on the essential parts, speeding up the feedback process.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Flexibility: Extract Pages Your Way</h4>
    <p class="text-base leading-relaxed">
        Our tool gives you precise control over the extraction process. You can choose exactly how you want to break down your document, making it suitable for any document structure:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Individual Pages:</strong> Need page 7 and page 22? Simply enter those numbers to extract them into separate PDFs, or combine them into a single new file.</li>
        <li><strong>Page Ranges:</strong> Easily define a chapter or section by entering a range like "5-12" to pull out a sequence of pages quickly and accurately.</li>
        <li><strong>Custom Sequences:</strong> The tool allows you to combine individual pages and ranges in one single extraction job, for example, "1, 5-8, 15". This means maximum customization for your output file.</li>
        <li><strong>Split Every Page:</strong> For maximum flexibility, you can opt to automatically split the entire PDF into single-page documents, ready for reorganization, editing, or deletion.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The FastFileTools Promise: Secure Server Processing</h4>
    <p class="text-base leading-relaxed">
        Handling contracts and reports requires trust. To ensure accurate splitting, your PDF is securely uploaded to our powerful server. We guarantee your privacy: all processing is done over an encrypted connection, and your files are permanently deleted from our server shortly after the task is complete. We do not store your original documents or the resulting split files long-term, ensuring your sensitive information remains private.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Maintaining Document Integrity</h4>
    <p class="text-base leading-relaxed">
        When we split your PDF, we ensure that the formatting, text, vector graphics, and layout of the selected pages are perfectly preserved. The resulting new PDF document will look exactly like the extracted pages from the original, maintaining fonts, images, and page structure without introducing watermarks or unwanted changes. This guarantees that the final document is professional and ready for immediate use, whether for printing or digital distribution.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: How to Split Your PDF Document in Three Steps</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop your large PDF file into the upload zone.</li>
        <li><strong>Define:</strong> Use the on-screen input field to clearly define the individual pages or page ranges you wish to extract (e.g., '1, 4, 10-15').</li>
        <li><strong>Download:</strong> Click 'Split PDF'. Your selected pages will be quickly generated into a new, smaller PDF file, ready to download instantly as a new document or a collection of smaller files packaged in a ZIP archive.</li>
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
        Dealing with fragmented documents can be a headache. Whether you have multiple contracts, separate chapters of a book, or a mix of invoices and receipts, you need one place to put it all. Our pdf merger tool is the seamless solution for combining two or more PDF files into a single, unified document. It saves you time, prevents lost files, and ensures a professional presentation every time you share your work.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">The Power of Unification: Why Merge Documents?</h4>
    <p class="text-base leading-relaxed">
        Merging documents is more than just stacking files; it is about creating efficiency and control in your workflow. By consolidating multiple source documents, you simplify management and ensure data integrity.
    </p>
    <ul class="list-disc list-inside ml-4 space-y-2">
        <li><strong>Effortless Archiving:</strong> Instead of keeping three separate quarterly reports, merge them into one comprehensive annual file for simple storage and future retrieval. This drastically reduces clutter in your file system.</li>
        <li><strong>Professional Submission:</strong> When submitting a proposal, you can combine the contract, the technical specifications, and the pricing sheet into one clean file, ensuring the recipient reads them in the correct, sequential order.</li>
        <li><strong>Simplified Sharing:</strong> Emailing one merged PDF is far easier and less prone to errors than attaching six different files that might open out of sequence. It eliminates the frustration of checking that every document was successfully attached.</li>
        <li><strong>Compiling Notes:</strong> Students and researchers can merge source materials, notes, and bibliographies into a single research paper file, keeping all relevant information centralized and easy to navigate.</li>
        <li><strong>Printing Efficiency:</strong> Merging ensures that when a document is printed, all sections follow one another seamlessly, without requiring manual intervention or separate print jobs.</li>
    </ul>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Key Feature: Full Control Over Page Order</h4>
    <p class="text-base leading-relaxed">
        Merging files is useless if they end up in the wrong order. Our tool gives you full drag-and-drop control *before* the final document is created. Once all your files are uploaded, you can easily reorganize them on screen using the file list controls to ensure the chapters, attachments, or annexes appear exactly where they should be in the final, combined PDF. This feature ensures you control the narrative flow and structure from the start to the finish of your final document. We handle all the complexity of file assembly on our secure backend.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Safety Guaranteed: Secure Server Processing</h4>
    <p class="text-base leading-relaxed">
        Confidential contracts and business documents should never be handled carelessly. To ensure a perfect merge of your documents, your files are securely uploaded to our powerful server. We prioritize your privacy: all merging is done over an encrypted connection, and your files are permanently deleted from our server shortly after the unified document is ready for download. We do not store your original documents or the resulting merged file long-term.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Maintaining File Integrity During Merging</h4>
    <p class="text-base leading-relaxed">
        Our pdf merger is designed to join documents while maintaining the integrity and quality of the original files. This means that if your original PDFs contained high-resolution images, active hyperlinks, or form fields, these elements are preserved wherever possible in the resulting combined document. You receive a final PDF that is not just a collection of pages, but a structurally sound, continuous document ready for professional use and sharing. The entire process is quick, often taking only seconds, even for large collections of files.
    </p>

    <h4 class="text-xl font-semibold text-gray-800 mt-6">Quick Guide: How to Merge Your PDFs in Seconds</h4>
    <ol class="list-decimal list-inside ml-4 space-y-2">
        <li><strong>Upload:</strong> Drop all the PDF files you want to combine into the tool zone. You must select at least two PDF files to begin the merge process.</li>
        <li><strong>Organize:</strong> Drag and drop the files in the preview window until they are in the perfect order. Use the reorder controls to adjust the sequence of documents that will form the final file.</li>
        <li><strong>Merge & Download:</strong> Click the 'Merge PDFs' button. Your single, unified document will be processed on our server and ready to download instantly.</li>
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
