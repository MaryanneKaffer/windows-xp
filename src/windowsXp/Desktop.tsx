import TaskBar from "./desktopComponents/taskBar";
export default function desktop() {
  return (
    <>
      <section className="bg-desktop min-h-screen w-full bg-cover">
        <TaskBar />
      </section>
    </>
  );
}
