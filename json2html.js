export default function json2html(data) {
    const headers = [...new Set(data.flatMap(Object.keys))];

    let table = `<table data-user="sairahulgogikar09@gmail.com"><thead><tr>`;
    headers.forEach(header => {
        table += `<th>${header}</th>`;
    });
    table += `</tr></thead>`;

    table += `<tbody>`;
    data.forEach(row => {
        table += `<tr>`;
        headers.forEach(header => {
            table += `<td>${row[header] || ''}</td>`;
        });
        table += `</tr>`;
    });
    table += `</tbody></table>`;

    return table;
}
