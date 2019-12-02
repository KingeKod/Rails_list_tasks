class TasksController < ApplicationController

	def index
		@tasks = Todo.all.order('project_id')
		#render @tasks.map { |t| "#{t.group}, #{t.purpose}"}
	end
	
	def new
	
	end
	
	def create
		#p params
		#render plain: params.inspect
		#@d = params[:task][:category].to_i
		@task = Todo.new(task_params)
		@task.save
		redirect_to root_path
		#render plain: @task.inspect
		#render plain: params[:task].inspect
		#respond_to do |format|
		#	format.js
		#end
	end
	
	private def task_params
		params.require(:task).permit(:text, :isCompleted, :project_id)
	end
	
end
