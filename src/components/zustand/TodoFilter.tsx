import { useTodoStore } from "../../zustand/TodoZustand";

const TodoFilter = () => {
  const { filter, setFilter } = useTodoStore();

  const filters: Array<{ key: "all" | "active" | "completed"; label: string }> =
    [
      { key: "all", label: "All" },
      { key: "active", label: "Active" },
      { key: "completed", label: "Completed" },
    ];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map((filterOption) => (
        <button
          key={filterOption.key}
          onClick={() => setFilter(filterOption.key)}
          className={`px-3 py-1 rounded-md ${
            filter === filterOption.key
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filterOption.label}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
