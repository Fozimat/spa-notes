const getContainerClass = (theme) => theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800";
const getTextClass = (theme) => theme === "dark" ? "text-gray-400" : "text-gray-800"
export { getContainerClass, getTextClass };