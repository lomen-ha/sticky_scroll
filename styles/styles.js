import tw from 'twin.macro';

export const styles = {
  container: () => [tw`h-screen w-full bg-blue-300`],
  section1: () => [tw`h-screen w-full bg-red-300`],
  section2: () => [tw`h-screen w-full bg-amber-300`],
  section3: () => [tw`h-screen w-full bg-gray-300`],
  section4: () => [tw`h-screen w-full bg-cyan-400`],
  section5: () => [tw`h-screen w-full bg-orange-300`],
  section6: () => [tw`h-screen w-full bg-pink-300`],
  section7: () => [tw`h-screen w-full bg-indigo-300`],
  stickyParent: () => [tw`h-[300vh]`],
  sticky: () => [tw`max-h-screen overflow-hidden`],
  horizontal: () => [tw`flex flex-row gap-10 pl-[50%]`],
  dim: () => [tw`block min-w-[400px] h-[520px]`],
  title: () => [tw`mb-10 max-w-7xl mx-auto`],
  wrapper: () => [
    tw`py-20 mb-20 sticky top-0 max-h-screen overflow-hidden h-screen`,
  ],
  project: () => [
    tw`flex flex-row gap-10 h-[520px] cursor-pointer [div]:[background-repeat: round]`,
    tw`[h5]:(opacity-0)`,
    tw`[transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1)]`,
  ],
  contents: () => [
    tw`hocus:(h-full [h5]:(opacity-100 transition duration-300 ))`,
    tw`hocus:[div]:(text-white bg-black/50)`,
  ],
  contents_desc: () => [tw`flex flex-col justify-between h-full p-[50px]`],
};
