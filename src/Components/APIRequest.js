export default async function APIRequest(url, options, errMsg = null) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Please refresh the page");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}
