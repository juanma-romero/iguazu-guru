// app/[locale]/blog/[slug]/page.js
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown'; // Necesitarás instalarlo: npm install react-markdown
import { fetchApi } from '@/lib/strapi';

async function getPostBySlug(slug, locale) {
  try {
    // Usamos documentId en lugar de slug ya que no hay campo slug en la respuesta
    const data = await fetchApi(`experiencias?filters[documentId][$eq]=${slug}`, locale);
    if (data.length === 0) return null;
    return data[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    notFound(); // Muestra la página 404 de Next.js
  }

  // Función para convertir contenido de Strapi a texto legible
  const renderContent = (content) => {
    if (!content || !Array.isArray(content)) return 'Contenido no disponible';

    return content.map((block, index) => {
      switch (block.type) {
        case 'heading':
          const level = block.level || 1;
          const Tag = `h${level}`;
          const text = block.children?.map(child => child.text || '').join('') || '';
          return <Tag key={index}>{text}</Tag>;

        case 'paragraph':
          const paraText = block.children?.map(child => child.text || '').join('') || '';
          return <p key={index}>{paraText}</p>;

        case 'list':
          const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag key={index}>
              {block.children?.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.children?.map(child => child.text || '').join('') || ''}
                </li>
              ))}
            </ListTag>
          );

        default:
          return <div key={index}>Tipo de contenido no soportado: {block.type}</div>;
      }
    });
  };

  return (
    <article>
      <h1>{post.Titulo}</h1>
      <div>
        {renderContent(post.contenido)}
      </div>
    </article>
  );
}
