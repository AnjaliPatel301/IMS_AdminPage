import React from 'react';

export const ReusableTable = ({ columns, data, renderActions }) => {
  return (
    <table className="w-full text-sm">
      <thead className="text-slate-400 border-b">
        <tr>
          {columns.map((c) => (
            <th key={c.key} className={c.className || 'px-5 pb-3 text-left'}>{c.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-t hover:bg-slate-50">
            {columns.map((c) => (
              <td key={c.key} className={c.className || 'px-5 py-4'}>{c.render ? c.render(row) : row[c.key]}</td>
            ))}
            {renderActions && <td className="text-center">{renderActions(row)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReusableTable;
