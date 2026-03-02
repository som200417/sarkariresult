export function LinkTable({ acf }) {
  return (
    <table className="w-full border border-black my-6 text-sm bg-yellow-200">
      <tbody>
        <tr>
          <td className="border border-black p-2">Apply Online</td>
          <td className="border border-black p-2 text-blue-700">
            <a href={acf.apply_link} target="_blank">Click Here</a>
          </td>
        </tr>
        <tr>
          <td className="border border-black p-2">Official Notification</td>
          <td className="border border-black p-2 text-blue-700">
            <a href={acf.notification_pdf} target="_blank">Click Here</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

