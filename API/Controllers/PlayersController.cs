using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Players;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public PlayersController(IMediator mediator)
        {
            this._mediator = mediator;

        }

        [HttpGet]
        public async Task<ActionResult<List<Player>>> Lists()
        {
            return await _mediator.Send(new Lists.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Player>> Stats(Guid id)
        {
            return await _mediator.Send(new Stats.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Join(Join.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Edit.Command command)
        {
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Out(Guid id)
        {
            return await _mediator.Send(new Out.Command{Id = id});
        }
    }
}