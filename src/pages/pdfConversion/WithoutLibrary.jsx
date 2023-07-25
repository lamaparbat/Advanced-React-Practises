import { users } from "./data";

const WithoutLibrary = () => {
  const onDownload = () => {
    const rows = users?.map((d, i) => {
      return `<tr key={${i}}>
          <td>${d?.username}</td>
          <td>${d?.phone}</td>
          <td>${d?.website}</td>
          <td>${d?.email}</td>
        </tr>
      `;
    });

    const pdfContent = `
      <table>
        <thead>
          <th>Name</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Email</th>
        </thead>
        <tbody>
          ${rows.join("")}
        </tbody>
      </table>
    `;

    // create blob content from pdf content
    const blobContent = new Blob([pdfContent], { type: "application/pdf" });

    // create downloadabe blob url
    const downloadUrl = URL.createObjectURL(blobContent);

    // create a virtual element
    const linkEle = document.createElement("a");
    linkEle.href = downloadUrl;
    linkEle.download = "users.pdf";
    document.body.appendChild(linkEle);

    // trigger the download
    linkEle.click();
  };

  return (
    <>
      <button onClick={onDownload}>Download PDF Without Library</button>
    </>
  );
};

export default WithoutLibrary;
