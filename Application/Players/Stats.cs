using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Players
{
    public class Stats
    {
        public class Query : IRequest<Player>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Player>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;
            }

            public async Task<Player> Handle(Query request, CancellationToken cancellationToken)
            {
                var player = await _context.Players.FindAsync(request.Id);

                return player;
            }
        }
    }
}