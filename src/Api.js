export default async function GetData(url = "") {
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

export async function PostData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function DeleteData(url = "", id = "") {
  await fetch(url + id, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ data: id }),
  });
}
