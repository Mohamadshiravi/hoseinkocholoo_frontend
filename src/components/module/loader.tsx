export default function SpinnerLoader() {
  return (
    <section className="w-full h-[100dvh] flex items-center justify-center fixed top-0 left-0 z-40 bg-white">
      <div className="border-[10px] border-primary border-t-transparent w-[140px] h-[140px] rounded-full animate-spin"></div>
    </section>
  );
}
