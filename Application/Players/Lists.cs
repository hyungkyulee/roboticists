using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Players
{
    public class Lists
    {
        public class Query : IRequest<List<Player>> { }
        public class Handler : IRequestHandler<Query, List<Player>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                this._context = context;

            }

            public async Task<List<Player>> Handle(Query request, CancellationToken cancellationToken)
            {
                var players = await _context.Players.ToListAsync();

                return players;
            }
        }
    }
}