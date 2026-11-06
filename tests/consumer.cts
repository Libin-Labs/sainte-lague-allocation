import { sainteLague } from '@lp-labs/sainte-lague-allocation';
if (
  sainteLague(
    [
      { party: 'a', votes: 10n },
      { party: 'b', votes: 0n },
    ],
    3,
  )[0].seats !== 3
)
  throw new Error('Seats');
// @ts-expect-error invalid argument must be rejected by declarations
sainteLague([{ party: 'a', votes: 10 }], 3);
