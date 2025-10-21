
using MediatR;
using Persistence;

namespace Application.ActivitiesFeature.Commands
{
    public class DeleteActivity
    {
        public class Command : IRequest
        {
            public required string Id { get; set; }
        }

        public class Handler(AppDbContext context) : IRequestHandler<Command>
        {
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync([request.Id], cancellationToken) ?? throw new Exception("Activity not found 🤷‍♂️");

                context.Activities.Remove(activity);

                var success = await context.SaveChangesAsync(cancellationToken) > 0;

                if (!success) throw new Exception("Problem deleting activity 🤦‍♂️");

                return;
            }
        }
    }
}