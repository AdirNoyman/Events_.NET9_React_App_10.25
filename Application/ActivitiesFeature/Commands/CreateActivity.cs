using Application.ActivitiesFeature.DTOs;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.ActivitiesFeature.Commands
{
    public class CreateActivity
    {
        public class Command : IRequest<string>
        {
            public required CreateActivityDTO NewActivityDTO { get; set; }
        }

        public class Handler(AppDbContext context, IMapper mapper, IValidator<Command> validator) : IRequestHandler<Command, string>
        {
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                await validator.ValidateAndThrowAsync(request, cancellationToken);

                var activity = mapper.Map<Activity>(request.NewActivityDTO);

                context.Activities.Add(activity);

                var success = await context.SaveChangesAsync(cancellationToken) > 0;

                if (success) return activity.Id;

                // if we reach here, something went wrong
                throw new Exception("Problem saving changes while creating activity 😫");
            }
        }
    }
}