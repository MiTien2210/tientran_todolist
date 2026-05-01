import TaskCard from "./TaskCard";
import TaskEmptyState from "./TaskEmptyState";
const TaskList = ({ filteredTasks, filter, handleTaskChanged }) => {
  console.log("filteredTasks: ", filteredTasks);

  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter}></TaskEmptyState>;
  }
  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task={task}
          index={index}
          handleTaskChanged={handleTaskChanged}
        />
      ))}
    </div>
  );
};

export default TaskList;
