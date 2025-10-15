using Domain;
using MediatR;
using Persistence;

namespace Application.ActivitiesFeature.Commands
{
    public class CreateActivity
    {
        public class Command : IRequest<string>
        {
            public required Activity Activity { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.Add(request.Activity);
                var success = await context.SaveChangesAsync(cancellationToken) > 0;

                if (success) return request.Activity.Id;

                throw new Exception("Problem saving changes");
            }
        }
    }
}