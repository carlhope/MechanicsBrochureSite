using Umbraco.Forms.Core;
using Umbraco.Forms.Core.Enums;
using Umbraco.Forms.Core.Models;
using Umbraco.Forms.Core.Persistence.Dtos;

namespace MechanicsBrochureSite.FormWorkflows
{
    public class SetPendingStateWorkflow : WorkflowType
    {
        public SetPendingStateWorkflow()
        {
            this.Id = new Guid("894f8891-de1b-49b4-846d-9e0c4c840b03");
            this.Name = "Set Entry State to Submitted";
            this.Description = "Sets the entry state to 'Submitted' after submission.";

        }


        public override Task<WorkflowExecutionStatus> ExecuteAsync(WorkflowExecutionContext context)
        {
            context.Record.State = FormState.Submitted;
            return Task.FromResult(WorkflowExecutionStatus.Completed);
        }


        public override List<Exception> ValidateSettings()
        {
            return new List<Exception>();

        }
    }
}
