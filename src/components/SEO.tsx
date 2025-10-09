import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Shaik Arafath - AI & Machine Learning Engineer | Co-Founder at Bit Benders",
  description = "Shaik Arafath is a B.Tech CSE student and Co-Founder of Bit Benders, specializing in AI/ML solutions. Explore innovative projects, skills, and experience in artificial intelligence and machine learning from Khammam, Telangana.",
  keywords = "Shaik Arafath, AI Engineer, Machine Learning Engineer, Bit Benders, Co-Founder, B.Tech CSE, Artificial Intelligence, Python, TensorFlow, Data Science, Computer Science Student, Khammam, Telangana",
  image = "https://shaikarafath.com/og-image.jpg",
  url = "https://shaikarafath.com/",
  type = "website"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
