// app/[locale]/blog/page.js
import Link from 'next/link';
import { fetchApi } from '@/lib/strapi';

// Función para obtener los datos de Strapi
async function getPosts(locale) {
  try {
    const data = await fetchApi('experiencias', locale);
    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  return (
    <div>
      <h1>Blog de Iguazu.guru</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/${locale}/blog/${post.documentId}`}>
              <h2>{post.Titulo}</h2>
              <p>{post.contenido ? 'Contenido disponible' : 'Sin descripción'}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
