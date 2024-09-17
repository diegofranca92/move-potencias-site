import { Carrousel } from "@/components/Carrousel";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="p-4 bg-primary text-white w-full">
          <h1 className="border-b-2 border-secondary text-center">Move Potências da Quebrada</h1>
        </div>
        <Carrousel />
      </main>
    </div>
  );
}
