interface SpecTableProps {
  specs: Array<{ label: string; value: string }>
}

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.label}
              className={index % 2 === 0 ? 'bg-surface' : 'bg-white'}
            >
              <td className="py-2.5 px-4 font-medium text-[#0A2342] w-2/5 border-b border-gray-100">
                {spec.label}
              </td>
              <td className="py-2.5 px-4 text-text-muted border-b border-gray-100">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
