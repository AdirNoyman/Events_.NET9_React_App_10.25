using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.ActivitiesFeature.Queries;
using Application.ActivitiesFeature.Commands;
using Application.ActivitiesFeature.DTOs;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities(CancellationToken ct)
        {
            return await Mediator.Send(new GetActivitiesList.Query(), ct);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(string id)
        {
            return await Mediator.Send(new GetActivityDetails.Query { Id = id });
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDTO)
        {
            return await Mediator.Send(new CreateActivity.Command { NewActivityDTO = activityDTO });
        }

        [HttpPut]
        public async Task<IActionResult> EditActivity(Activity activity)
        {
            await Mediator.Send(new EditActivity.Command { Activity = activity });

            return NoContent();

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(string id)
        {
            await Mediator.Send(new DeleteActivity.Command { Id = id });

            return Ok();
        }
    }
}