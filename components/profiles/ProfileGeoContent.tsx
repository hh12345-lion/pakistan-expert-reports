import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import type { ProfileGeoBlock } from "@/data/profile-geo";

export function ProfileGeoContent({ blocks }: { blocks: ProfileGeoBlock[] }) {
  if (blocks.length === 0) return null;

  return (
    <div className="my-8 space-y-8">
      {blocks.map((block) => {
        if (block.type === "table") {
          return (
            <ResponsiveTableWrap key={block.caption}>
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <caption className="mb-3 text-left text-base font-semibold text-[#1A2740]">{block.caption}</caption>
                <thead>
                  <tr className="border-b border-[#C4CDD6] bg-[#E8EDF1]">
                    {block.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold text-[#1A2740]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, i) => (
                    <tr key={i} className="border-b border-[#C4CDD6]">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-[#3D4654]">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </ResponsiveTableWrap>
          );
        }
        if (block.type === "list") {
          return (
            <div key={block.title}>
              <h2 className="text-xl font-bold text-[#1A2740]">{block.title}</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#3D4654]">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          );
        }
        return (
          <div key={block.title}>
            <h2 className="text-xl font-bold text-[#1A2740]">{block.title}</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#3D4654]">
              {block.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        );
      })}
    </div>
  );
}
