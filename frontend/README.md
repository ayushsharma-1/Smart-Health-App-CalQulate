# CalQulate - Smart Food Label Scanner

A modern, AI-powered food label scanner that provides instant nutrition analysis from food label images.

## 🚀 Features

- **AI-Powered Analysis**: Advanced OCR and machine learning for accurate nutrition extraction
- **Instant Results**: Get nutrition insights in seconds
- **Privacy First**: No data storage, real-time processing only
- **Mobile Optimized**: Perfect experience across all devices
- **Modern UI**: Clean, responsive design with dark/light mode
- **Comprehensive Pages**: Complete web application with all necessary pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Image Processing**: Next.js Image Optimization

## 📁 Project Structure

\`\`\`
calqulate/
├── app/
│   ├── about/
│   ├── api/
│   ├── blog/
│   ├── components/
│   ├── contact/
│   ├── faq/
│   ├── features/
│   ├── help/
│   ├── lib/
│   ├── not-found.js
│   ├── pricing/
│   ├── privacy/
│   ├── support/
│   ├── terms/
│   ├── upload/
│   ├── globals.css
│   ├── layout.js
│   ├── loading.js
│   ├── page.js
│   └── sitemap.js
├── public/
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── robots.txt
└── tailwind.config.js
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/calqulate.git
cd calqulate
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Add your API keys to `.env.local`:
\`\`\`
NEXT_PUBLIC_API_URL=https://text-extractor-pv5d.onrender.com/process-image
NEXT_PUBLIC_GROQ_API_URL=your_groq_api_url
\`\`\`

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Usage

1. **Upload Image**: Navigate to the upload page and select or drag-drop a food label image
2. **AI Analysis**: Our AI processes the image and extracts nutrition information
3. **View Results**: Get detailed nutrition breakdown with insights and recommendations
4. **Learn More**: Explore our FAQ and help sections for tips and best practices

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_API_URL`: Food label processing API endpoint
- `NEXT_PUBLIC_GROQ_API_URL`: Optional AI service endpoint

### Customization

- **Colors**: Modify `tailwind.config.js` for theme customization
- **Fonts**: Update `app/layout.js` for different font families
- **API Integration**: Modify `app/upload/page.js` for different API endpoints

## 📱 Pages

- **Home** (`/`): Landing page with features and call-to-action
- **Upload** (`/upload`): Main scanning functionality
- **About** (`/about`): Company information and mission
- **Features** (`/features`): Detailed feature explanations
- **FAQ** (`/faq`): Frequently asked questions
- **Pricing** (`/pricing`): Pricing information (free tier)
- **Contact** (`/contact`): Contact form and information
- **Support** (`/support`): Help and support resources
- **Privacy** (`/privacy`): Privacy policy
- **Terms** (`/terms`): Terms of service
- **Blog** (`/blog`): Articles and updates
- **Help** (`/help`): User guides and tutorials

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for AI technology inspiration
- Tailwind CSS for the amazing styling framework
- Next.js team for the excellent React framework
- All contributors and users of CalQulate

## 📞 Support

- Email: support@calqulate.com
- Website: https://calqulate.com
- Documentation: https://docs.calqulate.com

---

Made with ❤️ by the CalQulate Team
