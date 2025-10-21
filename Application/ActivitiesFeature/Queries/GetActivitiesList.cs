using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.ActivitiesFeature.Queries
{
    public class GetActivitiesList
    {
        public class Query : IRequest<List<Activity>> { }

        // The handler receives to arguments: the Query and the return type (List<Activity>)
        public class Handler(AppDbContext context, ILogger<GetActivitiesList> logger) : IRequestHandler<Query, List<Activity>>
        {

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {

                // // Check if cancelled before expensive operations
                // cancellationToken.ThrowIfCancellationRequested();

                return await context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}