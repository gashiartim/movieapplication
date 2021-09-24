﻿using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ListFeatures
{
  public  class ListOfLists
    {
        public class Query : IRequest<Result<List<Listt>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<Listt>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context )
            {
                _context = context;
            }

            public async Task<Result<List<Listt>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Listt>>.Success(await _context.Lists.ToListAsync(cancellationToken));
            }
        }
    }
}
