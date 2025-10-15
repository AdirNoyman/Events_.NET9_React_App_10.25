using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ActivitiesFeature.Queries
{
    public class GetActivitiesList
    {
        public class Query : IRequest<List<Activity>> { }

        // The handler receives to arguments: the Query and the return type (List<Activity>)
        public class Handler(AppDbContext context) : IRequestHandler<Query, List<Activity>>
        {
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}