/**
 * CatalogFilter — INATIVO na v1
 *
 * Este componente foi criado mas NÃO está renderizado em nenhuma página.
 * Ativar quando o catálogo tiver volume suficiente para justificar filtragem
 * (sugestão: 3+ categorias com 5+ itens cada).
 *
 * Para ativar:
 * 1. Import in `/products/page.tsx` and `/services/page.tsx`
 * 2. Converter as páginas de listagem para Client Components (adicionar 'use client')
 *    OU extrair o estado de filtro para um componente wrapper client
 * 3. Filtrar o array de items passado ao CatalogGrid com base na categoria ativa
 */

'use client'

interface CatalogFilterProps {
  categories: Array<{ value: string; label: string }>
  activeCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function CatalogFilter({ categories, activeCategory, onCategoryChange }: CatalogFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
          activeCategory === null
            ? 'bg-[#0A2342] text-white'
            : 'bg-surface text-text-main hover:bg-[#0A2342]/10'
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onCategoryChange(cat.value)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
            activeCategory === cat.value
              ? 'bg-[#0A2342] text-white'
              : 'bg-surface text-text-main hover:bg-[#0A2342]/10'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
